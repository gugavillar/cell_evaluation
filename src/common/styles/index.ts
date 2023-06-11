import { extendTheme } from '@chakra-ui/react'

import { buttons } from './components/button'

import { colors } from './colors'
import { fonts } from './fonts'

export const theme = extendTheme({
  ...fonts,
  ...buttons,
  colors,
})
