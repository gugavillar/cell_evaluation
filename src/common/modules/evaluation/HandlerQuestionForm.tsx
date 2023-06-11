import { Fragment, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { ProgressBar, QuestionForm } from '@/common/components'
import { isNullOrUndefined } from '@/common/formatters/values'

const questions = [
  'Como você avalia o conteúdo abordado',
  'Como você avalia o conhecimento do líder',
]

type HandlerQuestionFormType = {
  [key: string]: string
}

export const HandlerQuestionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm<HandlerQuestionFormType>()

  const formValues = watch()

  const valueOfProgress = useMemo(
    () =>
      Object.values(formValues)?.reduce(
        (acc, formValue) => (isNullOrUndefined(formValue) ? acc : acc + 1),
        0,
      ),
    [formValues],
  )

  const handleConcludeEvaluation = (values: any) => console.log(values)

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
