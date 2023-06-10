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
    <Box
      w="full"
      as="form"
      onSubmit={handleSubmit}
      px={[8, 8, 8, '6.9375rem']}
      textAlign="center"
      mb={8}
    >
      {questions?.map((question) => (
        <Question
          key={question}
          questionTitle={question}
          {...register(`${question}`, { required: true })}
        />
      ))}
      <Button
        type="submit"
        fontSize="xl"
        mt={6}
        width={['full', 'full', 80]}
        maxWidth={['full', 80, 80]}
        isDisabled={isInvalidForm}
        isLoading={isSendingForm}
      >
        Finalizar
      </Button>
    </Box>
  )
}
