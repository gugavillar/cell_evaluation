import { ReactNode } from 'react'

import { Box } from '@chakra-ui/react'

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
