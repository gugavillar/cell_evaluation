import { GetServerSideProps } from 'next'
import { Fragment, useState } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { ArrowLeft } from 'phosphor-react'

import { IsLeader } from '@/common/@types'
import { Header, IfComponent } from '@/common/components'
import { useToastToShowMessage } from '@/common/hooks'
import { ContainerSelection } from '@/common/modules/home/ContainerSelection'
import { getAllCells } from '@/common/services'

export type HomeProps = {
  registeredCells: Array<{
    id: string
    label: string
    isActive: boolean
  }>
  error?: boolean
}

export default function Home({ registeredCells, error }: HomeProps) {
  useToastToShowMessage({
    description: 'Falha ao carregar as células, tente novamente',
    status: 'error',
    hasShow: !!error,
  })
  const [isLeader, setIsLeader] = useState<null | IsLeader>(null)

  const handleBackButton = () => setIsLeader(null)

  const isLeaderNull = isLeader === null

  return (
    <Fragment>
      <Header title="Igreja Anglicana Vida" subtitle="Avaliação de células" />
      <Box
        px={[8, 8, 8, '6.9375rem']}
        mt={isLeaderNull ? -20 : -24}
        maxW={['full', '33rem', '40rem', 'full']}
        mx="auto"
      >
        <IfComponent
          condition={!isLeaderNull}
          component={
            <Button
              variant="ghost"
              leftIcon={<ArrowLeft width={16} height={16} />}
              onClick={handleBackButton}
              mb={6}
            >
              Voltar
            </Button>
          }
        />
        <ContainerSelection
          registeredCells={registeredCells}
          isLeader={isLeader}
          setIsLeader={setIsLeader}
        />
      </Box>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const cellsAPI = await getAllCells()
    const formattedCells = cellsAPI?.data?.map((cell) => ({
      id: cell?.ref?.value?.id,
      label: cell?.data?.name,
      isActive: cell?.data?.is_active,
    }))

    const registeredCells = formattedCells

    return { props: { registeredCells } }
  } catch {
    return { props: { error: true } }
  }
}
