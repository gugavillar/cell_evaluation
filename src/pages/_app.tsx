import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from '@/common/components'
import { theme } from '@/common/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
