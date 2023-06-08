import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  )
}
