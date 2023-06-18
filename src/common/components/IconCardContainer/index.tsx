import { ReactNode, memo } from 'react'

import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { IconCard } from './IconCard'
import { IconMobileCard } from './IconMobileCard'

type IconCardContainerProps = {
  cards: Array<{
    id: number
    icon: ReactNode
    text: string
  }>
}

const iconCardProps = {
  minW: ['full', '23.875rem'],
  maxW: ['full', '23.875rem'],
  minH: ['11.25rem', '16.375rem'],
}

export const IconCardContainer = memo(({ cards }: IconCardContainerProps) => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
  return (
    <Flex
      px={[8, 8, 8, '6.9375rem']}
      gap={9}
      mt={-20}
      maxW={['full', '33rem', '40rem', 'full']}
      mx="auto"
      flexWrap="wrap"
      align="center"
      justify="center"
    >
      {isMobile ? (
        <IconMobileCard cards={cards} />
      ) : (
        cards?.map(({ id, ...rest }) => (
          <IconCard key={id} {...rest} {...iconCardProps} />
        ))
      )}
    </Flex>
  )
})

IconCardContainer.displayName = 'IconCardContainer'
