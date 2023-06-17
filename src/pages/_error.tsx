import { GetServerSideProps } from 'next'
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
import { SmileySad } from 'phosphor-react'

import { Header } from '@/common/components'

export default function Error() {
  return (
    <Fragment>
      <Header title="Igreja Anglicana Vida" subtitle="Página não encontrada" />
      <Box maxW={['full', '48rem', '54rem']} p={6} mx="auto">
        <Card mt={-20}>
          <CardBody>
            <VStack spacing={4}>
              <Icon as={SmileySad} w={20} h={20} />
              <Heading fontSize={['xl', '2xl', '3xl']}>
                Tenho más notícias para você!
              </Heading>
              <Text>
                A página que você está procurando pode ter sido removida ou está
                temporariamente indisponível.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      statusCode: context.res.statusCode,
    },
  }
}
