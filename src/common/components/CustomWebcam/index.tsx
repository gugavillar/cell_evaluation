import { useRouter } from 'next/router'
import { ForwardedRef, forwardRef } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'
import QrCodeReader, { QRCode } from 'react-qrcode-reader'

type CustomWebcamProps = FlexProps

const videoConstraints = {
  facingMode: 'environment',
}

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    const router = useRouter()

    const handleScanner = async (result: QRCode) => {
      if (!result?.data) return

      router.push(result?.data)
    }

    return (
      <Flex {...props}>
        <QrCodeReader
          delay={1500}
          onRead={handleScanner}
          width={320}
          height={240}
          videoConstraints={videoConstraints}
        />
      </Flex>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
