import { UseFormRegister } from 'react-hook-form'

import { Question } from '../Question'

import { Box, Button } from '@chakra-ui/react'

type QuestionFormProps = {
  questions: Array<string>
  isInvalidForm: boolean
  isSendingForm: boolean
  register: UseFormRegister<any>
  handleSubmit: () => void
}

export const QuestionForm = ({
  questions,
  isInvalidForm,
  isSendingForm,
  register,
  handleSubmit,
}: QuestionFormProps) => {
  return (
    <Box w="full" as="form" onSubmit={handleSubmit}>
      {questions?.map((question) => (
        <Question
          key={question}
          questionTitle={question}
          {...register(`${question}`, { required: true })}
        />
      ))}
      <Button
        type="submit"
        mt={6}
        float="right"
        isDisabled={isInvalidForm}
        isLoading={isSendingForm}
      >
        Finalizar
      </Button>
    </Box>
  )
}
