import { QuestionForm } from '@/common/components'
import { useForm } from 'react-hook-form'

const questions = [
  'Como você avalia o conteúdo abordado',
  'Como você avalia o conhecimento do líder',
]

export const HandlerQuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm()
  const handleConcludeEvaluation = (values: any) => console.log(values)

  const isInvalidForm = !isDirty || !isValid

  return (
    <QuestionForm
      handleSubmit={handleSubmit(handleConcludeEvaluation)}
      isInvalidForm={isInvalidForm}
      isSendingForm={isSubmitting}
      questions={questions}
      register={register}
    />
  )
}
