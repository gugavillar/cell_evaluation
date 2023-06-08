import { uuid } from 'uuidv4'

import { CardContainer, Header, ProgressBar } from '@/common/components'

import { HandlerQuestionForm } from '@/common/modules'

import { Fragment } from 'react'

import { Fair, Hourglass, Message } from '@/common/components/Icons'
import { Divider } from '@chakra-ui/react'

const CARDS = [
  {
    id: uuid(),
    icon: <Hourglass />,
    text: 'É preciso muito pouco do seu tempo para responder.',
  },
  {
    id: uuid(),
    icon: <Message />,
    text: 'Por favor, seja honesto em sua resposta. (Mesmo que você não goste...)',
  },
  {
    id: uuid(),
    icon: <Fair />,
    text: 'Tente não deixar um "neutro" em sua resposta.',
  },
]

export default function Evaluation() {
  const name = 'flecha'

  return (
    <Fragment>
      <Header title={`Avaliação da célula ${name}`} subtitle="Teste" />
      <CardContainer cards={CARDS} />
      <ProgressBar value={30} />
      <Divider maxW={['75%', '80%']} mx="auto" px={8} borderColor="gray.300" />
      <HandlerQuestionForm />
    </Fragment>
  )
}
