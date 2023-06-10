import { Box, Progress, Text } from '@chakra-ui/react'
import { memo } from 'react'

type ProgressBarProps = {
  value: number
  total: number
}

export const ProgressBar = memo(({ value, total }: ProgressBarProps) => {
  const progressValue = (value / total) * 100
  const textWidthValue = progressValue === 0 ? '25px' : `${progressValue}%`
  return (
    <Box
      px={[8, 8, 8, '6.9375rem']}
      maxW={['full', '33rem', '40rem', 'full']}
      my={[8, 8, 12]}
      mx="auto"
    >
      <Text mb={4} width={textWidthValue} textAlign="end">
        {progressValue}%
      </Text>
      <Progress isAnimated value={progressValue} borderRadius={8} />
    </Box>
  )
})

ProgressBar.displayName = 'ProgressBar'
