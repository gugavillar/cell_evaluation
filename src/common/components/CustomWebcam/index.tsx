import { useRouter } from 'next/router'
import { ForwardedRef, forwardRef } from 'react'

import { Flex, FlexProps, useToast } from '@chakra-ui/react'
import QrReader from 'react-qr-reader'

type CustomWebcamProps = FlexProps

const videoStyles = {
  width: 400,
  height: 400,
  paddingLeft: '24px',
  paddingRight: '24px',
}

export const CustomWebcam = forwardRef(
  (props: CustomWebcamProps, ref: ForwardedRef<any>) => {
    const router = useRouter()
    const toast = useToast()

    const handleScanner = async (result: any) => {
      if (!result) return

      router.push(result)
    }

    const handleErrorScan = () => {
      toast({
        status: 'error',
        description: 'Ocorreu uma falha ao ler o qr code, tente novamente.',
      })
    }

    return (
      <Flex {...props}>
        <QrReader
          facingMode="environment"
          resolution={1000}
          ref={ref}
          onScan={handleScanner}
          onError={handleErrorScan}
          style={videoStyles}
          delay={false}
        />
      </Flex>
    )
  },
)

CustomWebcam.displayName = 'CustomWebcam'
