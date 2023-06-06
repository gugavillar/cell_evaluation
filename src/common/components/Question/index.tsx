import { Box, BoxProps, HStack, Text, useRadioGroup } from '@chakra-ui/react'
import { SelectionButton } from '../SelectionButton'

import { SCALE_EVALUATION } from '@/common/constants'
import { forwardRef } from 'react'

type QuestionProps = BoxProps & {
  questionTitle: string
}

export const Question = forwardRef(
  ({ questionTitle, ...props }: QuestionProps, ref: any) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: questionTitle,
    })

    const group = getRootProps()
    return (
      <Box mt={4} {...props}>
        <Text>{questionTitle}</Text>
        <HStack {...group} mt={1}>
          {SCALE_EVALUATION?.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <SelectionButton {...radio} key={value} ref={ref}>
                {value}
              </SelectionButton>
            )
          })}
        </HStack>
      </Box>
    )
  },
)

Question.displayName = 'Question'
