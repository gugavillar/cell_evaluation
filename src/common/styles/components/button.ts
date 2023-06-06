import { extendTheme } from '@chakra-ui/react'

export const buttons = extendTheme({
  components: {
    Button: {
      baseStyle: {
        width: 48,
        bg: 'orange.500',
        color: 'white',
      },
      variants: {
        primary: {
          height: 14,
          _hover: {
            _disabled: {
              bg: 'orange.500',
            },
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
})
