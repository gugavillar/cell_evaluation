import { memo } from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = memo(({ title, subtitle }: HeaderProps) => {
  return (
    <Box
      minH={['18rem', '18rem', '20rem']}
      p={8}
      color="white"
      bg="brand.purple"
    >
      <Box px={[0, 0, 8, 28]}>
        <Heading as="h1" mb={4} fontSize={['3xl', '4xl', '5xl']}>
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
