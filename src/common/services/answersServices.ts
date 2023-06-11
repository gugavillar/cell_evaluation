import { axiosAPI, faunaAPI, faunaQ } from '@/common/api'
import { HandlerQuestionFormType } from '../modules/evaluation/HandlerQuestionForm'

type SendAnswersParams = {
  answers: HandlerQuestionFormType & {
    tokenEvaluation: string
  }
}

export const sendAnswersFauna = (answers: SendAnswersParams) =>
  faunaAPI.query(
    faunaQ.Create(faunaQ.Collection('answers'), {
      data: answers,
    }),
  )

type SendAnswersReturn = {
  message: 'Invalid token' | 'Answers received'
}

export const sendAnswers = (
  params: SendAnswersParams,
): Promise<SendAnswersReturn> => axiosAPI.post('/api/sendAnswersAPI', params)
