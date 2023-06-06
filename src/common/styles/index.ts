import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'

import { buttons } from './components/button'

export const theme = extendTheme({
  ...fonts,
  ...buttons,
})
