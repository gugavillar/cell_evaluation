import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { buttons } from './components/button'
import { fonts } from './fonts'

export const theme = extendTheme({
  ...fonts,
  ...buttons,
  colors,
})
