import { useEffect } from 'react'

import { ToastProps as ChakraToastProps, useToast } from '@chakra-ui/react'

type ToastProps = {
  description: string
  status: ChakraToastProps['status']
  hasShow: boolean
}

export const useToastToShowMessage = ({
  description,
  status,
  hasShow,
}: ToastProps) => {
  const toast = useToast({ description, status })

  return useEffect(() => {
    hasShow && toast()
  }, [hasShow, toast])
}
