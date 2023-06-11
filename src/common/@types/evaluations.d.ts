interface EvaluationDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    cellRef: string
    token: string
  }
}

export interface ReturnCreateEvaluation extends EvaluationDatabase {}

export interface ReturnEvaluationAndCell {
  data: {
    name: string
    is_active: boolean
    token: string
  }
}
