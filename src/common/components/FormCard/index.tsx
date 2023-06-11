import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Select,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { IfComponent, Loader } from '@/common/components'
import { HomeProps } from '@/pages'
import { createEvaluation } from '@/common/services'

type GenerateEvaluationForm = {
  cellRef: string
}

export const FormCard = ({ registeredCells }: HomeProps) => {
  const [qrCodeLink, setQrCodeLink] = useState('')
  const [isGenerate, setIsGenerate] = useState(false)

  const toast = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm<GenerateEvaluationForm>({
    defaultValues: {
      cellRef: '',
    },
  })

  const handleGenerateQrCode = async (values: GenerateEvaluationForm) => {
    setIsGenerate(true)

    try {
      const { qrLink } = await createEvaluation({
        cellRef: values?.cellRef,
      })

      setQrCodeLink(qrLink)
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao gerar o qrCode',
      })
    } finally {
      setTimeout(() => setIsGenerate(false), 3000)
    }
  }

  const handleClearForm = () => {
    setQrCodeLink('')
    reset()
  }

  const isGenerateButtonDisabled = !isValid || !isDirty || Boolean(qrCodeLink)

  return (
    <Box px={8} mt={-20} maxW={['full', '48rem', '54rem']} mx="auto">
      <Card>
        <CardBody as="form" onSubmit={handleSubmit(handleGenerateQrCode)}>
          <Select
            placeholder="Selecione a célula"
            size="lg"
            variant="flushed"
            mb={6}
            {...register('cellRef')}
          >
            {registeredCells?.map((cell) => (
              <option
                disabled={!cell?.isActive}
                key={cell?.id}
                value={cell?.id}
              >
                {cell?.label}
              </option>
            ))}
          </Select>
          <IfComponent condition={isGenerate} component={<Loader />} />
          <Image
            mx="auto"
            alt="QrCode"
            src={qrCodeLink}
            display={Boolean(qrCodeLink) && !isGenerate ? 'block' : 'none'}
          />
          <Flex mt={6} align="center" justify="center" wrap="wrap" gap={4}>
            <Button
              width="18.75rem"
              isLoading={isSubmitting}
              isDisabled={isGenerateButtonDisabled}
              type="submit"
            >
              Gerar
            </Button>
            <Button width="18.75rem" onClick={handleClearForm}>
              Limpar
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}
