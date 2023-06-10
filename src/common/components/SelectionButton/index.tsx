import { Box, useRadio } from '@chakra-ui/react'
import { forwardRef } from 'react'

const radioProps = [
  {
    size: 14,
    color: 'red',
  },
  {
    size: 10,
    color: 'red',
  },
  {
    size: 6,
    color: 'blackAlpha.400',
  },
  {
    size: 10,
    color: 'green',
  },
  {
    size: 14,
    color: 'green',
  },
]

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
        w={radioProps[props.index]?.size}
        h={radioProps[props.index]?.size}
        borderRadius="full"
        border="3px solid"
        borderColor={radioProps[props.index]?.color}
        fontSize="lg"
        fontWeight={600}
        _checked={{
          bg: radioProps[props.index]?.color,
        }}
      />
    </Box>
  )
})

SelectionButton.displayName = 'SelectionButton'
