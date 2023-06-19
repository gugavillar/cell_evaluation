import { Dispatch, SetStateAction } from 'react'

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
  isLeader: null | IsLeader
  setIsLeader: Dispatch<SetStateAction<null | IsLeader>>
}

export const ContainerSelection = ({
  registeredCells,
  isLeader,
  setIsLeader,
}: ContainerSelectionProps) => {
  if (isLeader === 'leader')
    return <FormCard registeredCells={registeredCells} />

  if (isLeader === 'participant') return <ReadQrcode />

  return <AccessSelection setIsLeader={setIsLeader} />
}
