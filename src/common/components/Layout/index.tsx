import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box mx="auto" maxW="64rem">
      <Box p={6}>{children}</Box>
    </Box>
  )
}
