interface CellDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    name: string
    is_active: boolean
  }
}

export interface ReturnCellsAPI {
  data: Array<CellDatabase>
}

export interface ReturnCellAPI extends CellDatabase {}
