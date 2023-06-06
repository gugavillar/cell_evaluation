import { Header, Question } from '@/common/components'
import { TODAY } from '@/common/constants'
import { returnBrazilianDate } from '@/common/formatters'

import { Fragment } from 'react'

export default function Home() {
  const name = 'Vida'
  const formattedToday = returnBrazilianDate(TODAY)
  return (
    <Fragment>
      <Header
        title={`Realize a avaliação da célula ${name} no dia ${formattedToday}`}
        subtitle="Teste"
      />
      <Question questionTitle="Como você avalia o conteúdo abordado" />
    </Fragment>
  )
}
