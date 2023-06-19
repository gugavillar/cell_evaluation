export const buttons = {
  components: {
    Button: {
      baseStyle: {
        width: 48,
        bg: 'orange.500',
        color: 'white',
      },
      variants: {
        primary: {
          height: [12, 12, 14],
          _hover: {
            _disabled: {
              bg: 'orange.500',
            },
          },
        },
        ghost: {
          height: [12, 12, 14],
          bg: 'none',
          _hover: { bg: 'none' },
          _active: { bg: 'none' },
          _focusVisible: { outline: 'none' },
          width: 'inherit',
          px: 0,
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
}
