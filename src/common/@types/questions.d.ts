interface QuestionDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    question: string
    is_active: boolean
  }
}

export interface ReturnQuestionsAPI {
  data: Array<QuestionDatabase>
}
