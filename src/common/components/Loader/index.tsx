import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => {
  return (
    <Flex w="full" align="center" justify="center" height={20}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  )
}
