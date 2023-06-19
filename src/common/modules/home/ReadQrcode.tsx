import { useRef } from 'react'

import { Box, Button, Flex, useBoolean } from '@chakra-ui/react'

import { CustomWebcam, IfComponent } from '@/common/components'

export const ReadQrcode = () => {
  const [isOpenCam, setIsOpenCam] = useBoolean()
  const videoRef = useRef<any>(null)

  const stopCam = () => {
    videoRef?.current?.stopCamera()
    videoRef?.current?.clearComponent()
    setIsOpenCam.off()
  }

  const openCam = () => setIsOpenCam.on()

  return (
    <Box maxW="40rem" mx="auto" mt={6}>
      <Flex align="center" justify="space-evenly" gap={6} flex="wrap" px={6}>
        <Button onClick={openCam} width={40} isDisabled={isOpenCam}>
          Abrir câmera
        </Button>
        <Button onClick={stopCam} width={40} isDisabled={!isOpenCam}>
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
