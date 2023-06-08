import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'

import { buttons } from './components/button'
import { colors } from './colors'

export const theme = extendTheme({
  ...fonts,
  ...buttons,
  ...colors,
})
