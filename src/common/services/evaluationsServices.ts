import {
  ReturnCreateEvaluation,
  ReturnEvaluationAndCell,
} from '@/common/@types/'
import { axiosAPI, faunaAPI, faunaQ } from '@/common/api'

type CreateEvaluationParams = {
  cellRef: string
  token: string
}

export const createEvaluationFauna = (evaluation: CreateEvaluationParams) =>
  faunaAPI.query<ReturnCreateEvaluation>(
    faunaQ.Create(faunaQ.Collection('evaluations'), {
      data: {
        cellRef: faunaQ.Ref(faunaQ.Collection('cells'), evaluation?.cellRef),
        token: evaluation?.token,
        is_open: true,
      },
    }),
  )

export const getEvaluationAndCellName = (evaluationRef: string) =>
  faunaAPI.query<ReturnEvaluationAndCell>(
    faunaQ.Let(
      {
        cellRef: faunaQ.Select(
          ['data', 'cellRef'],
          faunaQ.Get(
            faunaQ.Ref(faunaQ.Collection('evaluations'), evaluationRef),
          ),
        ),
      },
      {
        data: {
          name: faunaQ.Select(
            ['data', 'name'],
            faunaQ.Get(faunaQ.Var('cellRef')),
          ),
          is_active: faunaQ.Select(
            ['data', 'is_active'],
            faunaQ.Get(faunaQ.Var('cellRef')),
          ),
          token: faunaQ.Select(
            ['data', 'token'],
            faunaQ.Get(
              faunaQ.Ref(faunaQ.Collection('evaluations'), evaluationRef),
            ),
          ),
          is_open: faunaQ.Select(
            ['data', 'is_open'],
            faunaQ.Get(
              faunaQ.Ref(faunaQ.Collection('evaluations'), evaluationRef),
            ),
          ),
        },
      },
    ),
  )

export const deleteEvaluation = (evaluationRef: string) =>
  faunaAPI.query(
    faunaQ.Delete(faunaQ.Ref(faunaQ.Collection('evaluations'), evaluationRef)),
  )

export const closeEvaluation = (evaluationRef: string) =>
  faunaAPI.query(
    faunaQ.Update(faunaQ.Ref(faunaQ.Collection('evaluations'), evaluationRef), {
      data: {
        is_open: false,
      },
    }),
  )

type CreateEvaluationReturn = {
  qrLink: string
}

export const createEvaluation = (params: {
  cellRef: CreateEvaluationParams['cellRef']
}): Promise<CreateEvaluationReturn> =>
  axiosAPI.post('/api/createEvaluationAPI', params)
