import { useRouter } from 'next/router'
import { Fragment, useMemo } from 'react'

import { useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ProgressBar, QuestionForm } from '@/common/components'
import { isNullOrUndefined } from '@/common/formatters/values'
import { sendAnswers } from '@/common/services'

export type HandlerQuestionFormType = {
  [key: string]: string
}

type HandlerQuestionFormProps = {
  token: string
  id: string
  questions: Array<string>
}

export const HandlerQuestionForm = ({
  token,
  id,
  questions,
}: HandlerQuestionFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm<HandlerQuestionFormType>()
  const toast = useToast()
  const router = useRouter()

  const formValues = watch()

  const valueOfProgress = useMemo(
    () =>
      Object.values(formValues)?.reduce(
        (acc, formValue) => (isNullOrUndefined(formValue) ? acc : acc + 1),
        0,
      ),
    [formValues],
  )

  const handleConcludeEvaluation = async (values: HandlerQuestionFormType) => {
    const answers = {
      tokenEvaluation: token,
      id,
      ...values,
    }

    try {
      const { message } = await sendAnswers({ answers })
      if (message === 'Answers received') {
        return router.push('/confirmacao')
      }
      if (message === 'Invalid token') {
        return toast({
          status: 'error',
          description: 'Chave de validação inválida, tente novamente.',
        })
      }
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao enviar as respostas, tente novamente.',
      })
    }
  }

  const isInvalidForm = !isDirty || !isValid

  return (
    <Fragment>
      <ProgressBar value={valueOfProgress} total={questions?.length} />
      <QuestionForm
        handleSubmit={handleSubmit(handleConcludeEvaluation)}
        isInvalidForm={isInvalidForm}
        isSendingForm={isSubmitting}
        questions={questions}
        register={register}
      />
    </Fragment>
  )
}
