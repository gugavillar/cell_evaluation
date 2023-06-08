import { Box, Heading, Text } from '@chakra-ui/react'

import { memo } from 'react'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = memo(({ title, subtitle }: HeaderProps) => {
  return (
    <Box minH="20rem" p={8} color="white" bg="purple">
      <Box maxW="850px" ml={[0, 0, 40]}>
        <Heading as="h1" mb={4} fontSize={['4xl', '4xl', '5xl']}>
          {title}
        </Heading>
        <Text as="h3" fontSize={['2xl', '2xl', '3xl']}>
          {subtitle}
        </Text>
      </Box>
    </Box>
  )
})

Header.displayName = 'Header'
