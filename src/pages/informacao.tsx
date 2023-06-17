import { useRouter } from 'next/router'
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
import { WarningCircle } from 'phosphor-react'

import { Header } from '@/common/components'

export default function Information() {
  const router = useRouter()

  const { message } = router.query

  return (
    <Fragment>
      <Header title="Igreja Anglicana Vida" />
      <Box maxW={['full', '48rem', '54rem']} p={6} mx="auto">
        <Card mt={-20}>
          <CardBody>
            <VStack spacing={4}>
              <Icon as={WarningCircle} w={20} h={20} color="brand.red" />
              <Heading fontSize={['xl', '2xl', '3xl']}>
                Algo errado aconteceu!
              </Heading>
              <Text textAlign="center">{message}</Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </Fragment>
  )
}
