import { Fragment } from 'react'
import { GetServerSideProps } from 'next'

import { FormCard, Header } from '@/common/components'
import { getAllCells } from '@/common/services'
import { useInfoMessage } from '@/common/hooks'

export type HomeProps = {
  registeredCells: Array<{
    id: string
    label: string
    isActive: boolean
  }>
  error?: boolean
}

export default function Home({ registeredCells, error }: HomeProps) {
  useInfoMessage({
    description: 'Falha ao carregar as células, tente novamente',
    status: 'error',
    hasShow: !!error,
  })

  return (
    <Fragment>
      <Header title="Igreja Anglicana Vida" subtitle="Avaliação de células" />
      <FormCard registeredCells={registeredCells} />
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
