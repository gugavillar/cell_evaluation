import { GetServerSideProps } from 'next'
import { Fragment } from 'react'

import { Header, IconCardContainer } from '@/common/components'
import { Fair, Hourglass, Message } from '@/common/components/Icons'
import { HandlerQuestionForm } from '@/common/modules'
import { getEvaluationAndCellName } from '@/common/services'
import { getAllQuestions } from '@/common/services/questionsServices'
import { validateJWT } from '@/common/validators'

const CARDS = [
  {
    id: 1,
    icon: <Hourglass />,
    text: 'Leva pouco tempo para responder, e é super fácil.',
  },
  {
    id: 2,
    icon: <Message />,
    text: 'Por favor, seja honesto em sua resposta. (Mesmo que você não goste...)',
  },
  {
    id: 3,
    icon: <Fair />,
    text: 'Tente não deixar um "neutro" em sua resposta.',
  },
]

type EvaluationProps = {
  name: string
  is_active: boolean
  token: string
  id: string
  questions: Array<string>
}

export default function Evaluation({
  name,
  token,
  id,
  questions,
}: EvaluationProps) {
  return (
    <Fragment>
      <Header title={`Avaliação da célula ${name}`} />
      <IconCardContainer cards={CARDS} />
      <HandlerQuestionForm token={token} id={id} questions={questions} />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const { cookies } = context.req

  try {
    const { data } = await getEvaluationAndCellName(String(id))

    const isValidJWT = validateJWT(data.token)

    if (!isValidJWT) {
      return {
        notFound: true,
      }
    }

    if (!data?.is_active) {
      const message = encodeURI(
        'A célula que você deseja realizar a avaliação foi desativada, por favor fale com o líder da célula.',
      )
      return {
        redirect: {
          destination: `/informacao?message=${message}`,
          permanent: false,
        },
      }
    }

    if (!data?.is_open) {
      const message = encodeURI(
        'O período de avaliação foi encerrado, obrigado por tentar realizar a avaliação.',
      )
      return {
        redirect: {
          destination: `/informacao?message=${message}`,
          permanent: false,
        },
      }
    }

    if (cookies?.[String(id)]) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    const response = await getAllQuestions()

    const questions = response?.data
      ?.filter((question) => question?.data?.is_active)
      ?.map((question) => question?.data?.question)

    return { props: { ...data, id, questions } }
  } catch {
    return {
      notFound: true,
    }
  }
}
