import { ForwardedRef, forwardRef } from 'react'

import { Box, BoxProps } from '@chakra-ui/react'
import Webcam from 'react-webcam'

type CustomWebcamProps = BoxProps

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    return (
      <Box {...props}>
        <Webcam height={300} width={300} ref={ref} />
      </Box>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
