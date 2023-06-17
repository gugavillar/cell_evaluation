import { ReturnQuestionsAPI } from '../@types/questions'
import { faunaAPI, faunaQ } from '../api'

export const getAllQuestions = () =>
  faunaAPI.query<ReturnQuestionsAPI>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('questions'))),
      faunaQ.Lambda('questionRef', faunaQ.Get(faunaQ.Var('questionRef'))),
    ),
  )
