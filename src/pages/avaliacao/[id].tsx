import { Header } from '@/common/components'
import { TODAY } from '@/common/constants'
import { returnBrazilianDate } from '@/common/formatters'

import { HandlerQuestionForm } from '@/common/modules'

import { Fragment } from 'react'

const formattedToday = returnBrazilianDate(TODAY)

export default function Evaluation() {
  const name = 'Vida'

  return (
    <Fragment>
      <Header
        title={`Realize a avaliação da célula ${name} no dia ${formattedToday}`}
        subtitle="Teste"
      />
      <HandlerQuestionForm />
    </Fragment>
  )
}
