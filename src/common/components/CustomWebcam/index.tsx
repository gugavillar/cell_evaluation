import { ForwardedRef, forwardRef } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'
import Webcam from 'react-webcam'

type CustomWebcamProps = FlexProps

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: 'environment',
}

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    return (
      <Flex {...props}>
        <Webcam
          height={300}
          width={300}
          videoConstraints={videoConstraints}
          ref={ref}
        />
      </Flex>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
