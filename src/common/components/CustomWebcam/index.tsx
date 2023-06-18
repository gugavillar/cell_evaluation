import { ForwardedRef, forwardRef } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'
import Webcam from 'react-webcam'

type CustomWebcamProps = FlexProps

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    return (
      <Flex {...props}>
        <Webcam height={300} width={300} ref={ref} />
      </Flex>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
