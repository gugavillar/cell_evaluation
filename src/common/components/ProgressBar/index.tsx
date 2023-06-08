import { Box, Progress, Text } from '@chakra-ui/react'

type ProgressBarProps = {
  value: number
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <Box px={8} maxW="62.5rem" my={12} mx="auto">
      <Text mb={4}>{value}%</Text>
      <Progress value={value} borderRadius={8} />
    </Box>
  )
}
