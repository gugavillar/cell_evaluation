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
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
}
