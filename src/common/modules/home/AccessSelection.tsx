import { Flex } from '@chakra-ui/react'
import { User, UsersThree } from 'phosphor-react'

import { IsLeader } from '@/common/@types'
import { IconCard } from '@/common/components/IconCardContainer/IconCard'

const iconCardProps = {
  minW: '320px',
}

const iconProps = {
  color: '#21978B',
  width: 50,
  height: 50,
}

type AccessSelectionProps = {
  setIsLeader: (type: IsLeader) => void
}

export const AccessSelection = ({ setIsLeader }: AccessSelectionProps) => {
  const handleSetLeader = (type: IsLeader) => setIsLeader(type)

  return (
    <Flex gap={16} flexWrap="wrap" align="center" justify="center">
      <IconCard
        icon={<UsersThree {...iconProps} />}
        text="Líder"
        onClick={() => handleSetLeader('leader')}
        {...iconCardProps}
      />
      <IconCard
        icon={<User {...iconProps} />}
        text="Participante"
        onClick={() => handleSetLeader('participant')}
        {...iconCardProps}
      />
    </Flex>
  )
}
