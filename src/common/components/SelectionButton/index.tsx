import { Box, useRadio } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const SelectionButton = forwardRef((props: any, ref: any) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const radio = getRadioProps()

  return (
    <Box as="label">
      <input {...input} ref={ref} />
      <Box
        {...radio}
        cursor="pointer"
        px={6}
        py={3}
        bg="teal.500"
        borderRadius={15}
        fontSize="lg"
        fontWeight={600}
        _checked={{
          bg: 'green.500',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
})

SelectionButton.displayName = 'SelectionButton'
