import { Fragment, ReactNode } from 'react'

import {
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'

type IconMobileCardProps = {
  cards: Array<{
    id: number
    icon: ReactNode
    text: string
  }>
}

export const IconMobileCard = ({ cards }: IconMobileCardProps) => {
  return (
    <ChakraCard
      bg="white"
      minH={['11.25rem', '16.375rem']}
      py={8}
      px={6}
      boxShadow="lg"
    >
      <CardHeader alignSelf="center">
        <Heading fontSize="2xl">Informações</Heading>
      </CardHeader>
      <CardBody p={0}>
        <Grid templateColumns={'60px 1fr'} rowGap="1.5rem" columnGap="1.5rem">
          {cards?.map((card) => (
            <Fragment key={card?.id}>
              <GridItem alignSelf="center" justifySelf="center">
                {card?.icon}
              </GridItem>
              <GridItem alignSelf="center">
                <Text align="justify" fontSize={['sm', 'md', 'xl']}>
                  {card?.text}
                </Text>
              </GridItem>
            </Fragment>
          ))}
        </Grid>
      </CardBody>
    </ChakraCard>
  )
}
