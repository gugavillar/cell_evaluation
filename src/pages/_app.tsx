import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from '@/common/components'
import { TOAST_OPTIONS } from '@/common/constants'
import { theme } from '@/common/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} toastOptions={TOAST_OPTIONS}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
