import { GetServerSideProps } from 'next'
import { Fragment, useRef } from 'react'

import { useBoolean, Button } from '@chakra-ui/react'

import {
  CustomWebcam,
  FormCard,
  Header,
  IfComponent,
} from '@/common/components'
import { useToastToShowMessage } from '@/common/hooks'
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
  const [flag, setFlag] = useBoolean()
  const videoRef = useRef<any>(null)

  const stopCam = () => {
    const stream = videoRef?.current?.stream
    const tracks = stream.getTracks()
    tracks.forEach((track: any) => track?.stop())
    setFlag?.off()
  }

  useToastToShowMessage({
    description: 'Falha ao carregar as células, tente novamente',
    status: 'error',
    hasShow: !!error,
  })

  return (
    <Fragment>
      <Header title="Igreja Anglicana Vida" subtitle="Avaliação de células" />
      <FormCard registeredCells={registeredCells} />
      <Button onClick={setFlag.on}>OpenCamera</Button>
      <Button onClick={stopCam}>CloseCamera</Button>
      <IfComponent
        condition={flag}
        component={<CustomWebcam ref={videoRef} />}
      />
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
