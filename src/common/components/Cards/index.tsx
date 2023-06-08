import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Card } from './Card'
import { MobileCard } from './MobileCard'

type CardContainerProps = {
  cards: Array<{
    id: string
    icon: ReactNode
    text: string
  }>
}

export const CardContainer = ({ cards }: CardContainerProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false })
  return (
    <Flex
      px={['1rem', '2rem', '6.9375rem']}
      gap="2.25rem"
      mt="-5.25rem"
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
}
