interface CellDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    name: string
  }
}

export interface ReturnCellsAPI {
  data: Array<CellDatabase>
}

export interface ReturnCellAPI extends CellDatabase {}
