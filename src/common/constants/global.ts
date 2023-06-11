import { ToastProps } from '@chakra-ui/react'

export const SCALE_EVALUATION = ['1', '2', '3', '4', '5'] as const
export const TODAY = new Date() as Date
export const TOAST_OPTIONS = {
  defaultOptions: {
    variant: 'left-accent',
    isClosable: true,
    duration: 3000,
    position: 'top-right',
  },
} as ToastProps
