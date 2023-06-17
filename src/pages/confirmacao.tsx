import { Fragment } from 'react'

import {
  Box,
  Card,
  CardBody,
  Heading,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CheckCircle } from 'phosphor-react'

import { Header } from '@/common/components'

export default function Confirmation() {
  return (
    <Fragment>
      <Header
        title="Igreja Anglicana Vida"
        subtitle="Obrigado por participar"
      />
      <Box maxW={['full', '48rem', '54rem']} p={6} mx="auto">
        <Card mt={-20}>
          <CardBody>
            <VStack spacing={4}>
              <Icon as={CheckCircle} w={20} h={20} color="brand.green" />
              <Heading fontSize={['xl', '2xl', '3xl']}>
                Obrigado por participar!
              </Heading>
              <Text textAlign="center">
                Você é incrível, esperamos que tenha aprendido bastante até a
                próxima.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </Fragment>
  )
}
