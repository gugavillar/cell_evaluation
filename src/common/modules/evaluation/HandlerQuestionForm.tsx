import { Fragment, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { ProgressBar, QuestionForm } from '@/common/components'
import { isNullOrUndefined } from '@/common/formatters/values'
import { sendAnswers } from '@/common/services'
import { useToast } from '@chakra-ui/react'

const questions = [
  'Como você avalia o conteúdo abordado',
  'Como você avalia o conhecimento do líder',
]

export type HandlerQuestionFormType = {
  [key: string]: string
}

type HandlerQuestionFormProps = {
  token: string
}

export const HandlerQuestionForm = ({ token }: HandlerQuestionFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm<HandlerQuestionFormType>()
  const toast = useToast()

  const formValues = watch()

  const valueOfProgress = useMemo(
    () =>
      Object.values(formValues)?.reduce(
        (acc, formValue) => (isNullOrUndefined(formValue) ? acc : acc + 1),
        0,
      ),
    [formValues],
  )

  const handleConcludeEvaluation = async (values: any) => {
    const answers = {
      tokenEvaluation: token,
      ...values,
    }

    console.log('handleConcludeEvaluation', { answers })

    try {
      const { message } = await sendAnswers({ answers })
      if (message === 'Answers received') {
        return toast({
          status: 'success',
          description: 'Obrigado por responder.',
        })
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
