import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const returnBrazilianDate = (date: number | Date) =>
  format(date, 'dd/MM/yyyy', { locale: ptBR })
