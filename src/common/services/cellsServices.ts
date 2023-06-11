import { ReturnCellAPI, ReturnCellsAPI } from '@/common/@types'
import { faunaAPI, faunaQ } from '@/common/api'

export const getAllCells = () =>
  faunaAPI.query<ReturnCellsAPI>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('cells'))),
      faunaQ.Lambda('cellRef', faunaQ.Get(faunaQ.Var('cellRef'))),
    ),
  )

export const getCellByRef = (ref: string) =>
  faunaAPI.query<ReturnCellAPI>(
    faunaQ.Get(faunaQ.Ref(faunaQ.Collection('cells'), ref)),
  )
