import { Heading, Text } from '@chakra-ui/react'

import { Fragment, memo } from 'react'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = memo(({ title, subtitle }: HeaderProps) => {
  return (
    <Fragment>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </Fragment>
  )
})

Header.displayName = 'Header'
