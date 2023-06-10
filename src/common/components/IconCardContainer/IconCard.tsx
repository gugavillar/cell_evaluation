import {
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

type IconCardProps = {
  icon: ReactNode
  text: string
}

export const IconCard = ({ icon, text }: IconCardProps) => {
  return (
    <ChakraCard
      bg="white"
      minW={['full', '23.875rem']}
      maxW={['full', '23.875rem']}
      minH={['11.25rem', '16.375rem']}
      py={8}
      px={6}
      boxShadow="lg"
    >
      <CardHeader alignSelf="center">{icon}</CardHeader>
      <CardBody p={4}>
        <Text align="center">{text}</Text>
      </CardBody>
    </ChakraCard>
  )
}
