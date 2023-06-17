import {
  evaluationErrorsMessages,
  evaluationTranslatedErrorMessages,
} from '../constants/evaluationMessages'

export const getEvaluationErrorMessages = (
  error: string,
  genericMessage: string,
) => {
  const indexError = evaluationErrorsMessages?.findIndex(
    (value) => value === error,
  )

  if (indexError) return evaluationTranslatedErrorMessages[indexError]

  return genericMessage
}
