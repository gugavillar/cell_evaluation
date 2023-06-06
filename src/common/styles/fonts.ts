import { extendTheme } from '@chakra-ui/react'

import { Arimo, Roboto } from 'next/font/google'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['900'],
})

const arimoFont = Arimo({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const fonts = extendTheme({
  fonts: {
    heading: robotoFont.style.fontFamily,
    body: arimoFont.style.fontFamily,
  },
})
