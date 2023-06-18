import { ReactNode } from 'react'

import {
  CardBody,
  CardHeader,
  CardProps,
  Card as ChakraCard,
  Text,
} from '@chakra-ui/react'

type IconCardProps = CardProps & {
  icon: ReactNode
  text: string
}

export const IconCard = ({ icon, text, ...props }: IconCardProps) => {
  return (
    <ChakraCard bg="white" py={8} px={6} boxShadow="lg" {...props}>
      <CardHeader alignSelf="center">{icon}</CardHeader>
      <CardBody p={4}>
        <Text align="center">{text}</Text>
      </CardBody>
    </ChakraCard>
  )
}
