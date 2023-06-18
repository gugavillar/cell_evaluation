import { useState } from 'react'

import { IsLeader } from '@/common/@types'
import { FormCard } from '@/common/components'

import { AccessSelection } from './AccessSelection'
import { ReadQrcode } from './ReadQrcode'

type ContainerSelectionProps = {
  registeredCells: Array<{
    id: string
    label: string
    isActive: boolean
  }>
}

export const ContainerSelection = ({
  registeredCells,
}: ContainerSelectionProps) => {
  const [isLeader, setIsLeader] = useState<null | IsLeader>(null)

  if (isLeader === 'leader')
    return <FormCard registeredCells={registeredCells} />

  if (isLeader === 'participant') return <ReadQrcode />

  return <AccessSelection setIsLeader={setIsLeader} />
}
