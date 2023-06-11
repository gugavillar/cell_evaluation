import { Fragment } from 'react'
import { GetServerSideProps } from 'next'
import { uuid } from 'uuidv4'

import { Fair, Hourglass, Message } from '@/common/components/Icons'
import { Header, IconCardContainer } from '@/common/components'
import { HandlerQuestionForm } from '@/common/modules'
import { getEvaluationAndCellName } from '@/common/services'
import { validateJWT } from '@/common/validators'

const CARDS = [
  {
    id: uuid(),
    icon: <Hourglass />,
    text: 'Leva pouco tempo para responder, e é super fácil.',
  },
  {
    id: uuid(),
    icon: <Message />,
    text: 'Por favor, seja honesto em sua resposta. (Mesmo que você não goste...)',
  },
  {
    id: uuid(),
    icon: <Fair />,
    text: 'Tente não deixar um "neutro" em sua resposta.',
  },
]

type EvaluationProps = {
  name: string
  is_active: boolean
  token: string
  id: string
}

export default function Evaluation({ name, token, id }: EvaluationProps) {
  return (
    <Fragment>
      <Header title={`Avaliação da célula ${name}`} subtitle="Teste" />
      <IconCardContainer cards={CARDS} />
      <HandlerQuestionForm token={token} id={id} />
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

    if (cookies?.[String(id)]) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return { props: { ...data, id } }
  } catch {
    return {
      notFound: true,
    }
  }
}
