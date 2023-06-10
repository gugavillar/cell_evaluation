import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode, memo } from 'react'

import { IconCard } from './IconCard'
import { IconMobileCard } from './IconMobileCard'

type IconCardContainerProps = {
  cards: Array<{
    id: string
    icon: ReactNode
    text: string
  }>
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
        cards?.map(({ id, ...rest }) => <IconCard key={id} {...rest} />)
      )}
    </Flex>
  )
})

IconCardContainer.displayName = 'IconCardContainer'
