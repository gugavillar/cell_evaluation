import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode, memo } from 'react'

import { Card } from './Card'
import { MobileCard } from './MobileCard'

type CardContainerProps = {
  cards: Array<{
    id: string
    icon: ReactNode
    text: string
  }>
}

export const CardContainer = memo(({ cards }: CardContainerProps) => {
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
        <MobileCard cards={cards} />
      ) : (
        cards?.map(({ id, ...rest }) => <Card key={id} {...rest} />)
      )}
    </Flex>
  )
})

CardContainer.displayName = 'CardContainer'
