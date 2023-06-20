import { useRef } from 'react'

import { Box, Button, Flex, useBoolean } from '@chakra-ui/react'

import { CustomWebcam, IfComponent } from '@/common/components'

export const ReadQrcode = () => {
  const [isOpenCam, setIsOpenCam] = useBoolean()
  const videoRef = useRef<any>(null)

  const stopCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    const tracks = stream.getTracks()
    tracks.forEach((track) => track?.stop())
    setIsOpenCam.off()
  }

  const openCam = async () => {
    console.log(videoRef?.current)
    setIsOpenCam.on()
  }

  console.log(videoRef?.current)

  return (
    <Box maxW="40rem" mx="auto" mt={6}>
      <Flex align="center" justify="space-evenly" gap={6} flex="wrap">
        <Button onClick={openCam} isDisabled={isOpenCam}>
          Abrir câmera
        </Button>
        <Button onClick={stopCam} isDisabled={!isOpenCam}>
          Fechar câmera
        </Button>
      </Flex>
      <IfComponent
        condition={isOpenCam}
        component={
          <CustomWebcam ref={videoRef} mt={8} align="center" justify="center" />
        }
      />
    </Box>
  )
}
