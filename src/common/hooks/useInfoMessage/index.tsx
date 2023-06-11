import { ToastProps as ChakraToastProps, useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

type ToastProps = {
  description: string
  status: ChakraToastProps['status']
  hasShow: boolean
}

export const useInfoMessage = ({
  description,
  status,
  hasShow,
}: ToastProps) => {
  const toast = useToast({
    description,
    status,
    variant: 'left-accent',
    isClosable: true,
    duration: 3000,
    position: 'top-right',
  })

  return useEffect(() => {
    hasShow && toast()
  }, [hasShow, toast])
}
