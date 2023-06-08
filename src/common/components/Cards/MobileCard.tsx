import {
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Fragment, ReactNode } from 'react'

type MobileCardProps = {
  cards: Array<{
    id: string
    icon: ReactNode
    text: string
  }>
}

export const MobileCard = ({ cards }: MobileCardProps) => {
  return (
    <ChakraCard
      bg="white"
      minW={['full', 'full', '23.875rem']}
      maxW={['full', 'full', '23.875rem']}
      minH={['11.25rem', '16.375rem']}
      py={8}
      px={6}
      boxShadow="lg"
    >
      <CardHeader alignSelf="center">
        <Heading>Instruções</Heading>
      </CardHeader>
      <CardBody>
        <Grid templateColumns={'60px 1fr'} rowGap="2rem" columnGap="2rem">
          {cards?.map((card) => (
            <Fragment key={card?.id}>
              <GridItem alignSelf="center" justifySelf="center">
                {card?.icon}
              </GridItem>
              <GridItem alignSelf="center">
                <Text align="justify">{card?.text}</Text>
              </GridItem>
            </Fragment>
          ))}
        </Grid>
      </CardBody>
    </ChakraCard>
  )
}
