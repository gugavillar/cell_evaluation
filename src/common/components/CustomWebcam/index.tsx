import { useRouter } from 'next/router'
import { ForwardedRef, forwardRef } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'
import QrCodeReader from 'react-qrcode-reader'

type CustomWebcamProps = FlexProps

/* const videoStyles = {
  width: 300,
  paddingLeft: '24px',
  paddingRight: '24px',
  marginTop: '32px',
  display: 'flex',
  alignItens: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
} */

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    const router = useRouter()

    const handleScanner = async (result: any) => {
      if (!result) return

      router.push(result)
    }

    return (
      <Flex {...props}>
        <QrCodeReader
          delay={1500}
          onRead={handleScanner}
          width={320}
          height={240}
          videoConstraints={{ facingMode: 'environment' }}
        />
      </Flex>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
