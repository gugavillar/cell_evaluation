import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
  useRadioGroup,
} from '@chakra-ui/react'
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
      <Box mx="auto" minH={20} my={6} {...props}>
        <Heading
          as="h4"
          textAlign="center"
          fontSize={['md', 'lg', '2xl']}
          fontWeight={400}
        >
          {questionTitle}
        </Heading>
        <Flex
          {...group}
          align="center"
          justify="center"
          gap={6}
          maxW="28.75rem"
          mx="auto"
          minH={24}
        >
          {SCALE_EVALUATION?.map((value, index) => {
            const radio = getRadioProps({ value })
            return (
              <SelectionButton {...radio} key={value} ref={ref} index={index}>
                {value}
              </SelectionButton>
            )
          })}
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          maxW="29.75rem"
          mx="auto"
          fontSize={['md', 'lg', '2xl']}
        >
          <Text>Discordo</Text>
          <Text>Concordo</Text>
        </Flex>
      </Box>
    )
  },
)

Question.displayName = 'Question'
