import { useState } from 'react'

import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardBody,
  Flex,
  Image,
  Select,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { IfComponent, Loader } from '@/common/components'
import { createEvaluation } from '@/common/services'
import {
  closeEvaluation,
  deleteEvaluation,
} from '@/common/services/evaluationsServices'
import { HomeProps } from '@/pages'

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
        description: 'Falha ao gerar o qrCode.',
      })
    } finally {
      setTimeout(() => setIsGenerate(false), 3000)
    }
  }

  const handleClearForm = async () => {
    try {
      const evaluationRef = qrCodeLink?.split('/')?.at(-1) as string

      await deleteEvaluation(evaluationRef)

      setQrCodeLink('')
      reset()
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao limpar o qrCode.',
      })
    }
  }

  const handleCloseEvaluation = async () => {
    try {
      const evaluationRef = qrCodeLink?.split('/')?.at(-1) as string

      await closeEvaluation(evaluationRef)

      setQrCodeLink('')
      reset()

      toast({
        status: 'success',
        description: 'A pesquisa foi encerrada.',
      })
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao encerrar a pesquisa, tente novamente.',
      })
    }
  }

  const isGenerateButtonDisabled = !isValid || !isDirty || isGenerate

  const actionButtonFormProps: ButtonProps = {
    width: '18.75rem',
    ...(!qrCodeLink
      ? {
          isLoading: isSubmitting,
          isDisabled: isGenerateButtonDisabled,
          type: 'submit',
        }
      : {
          type: 'button',
          onClick: handleCloseEvaluation,
          isDisabled: isGenerate,
        }),
  }

  const buttonText = !qrCodeLink ? 'Gerar' : 'Finalizar'

  return (
    <Box maxW={['full', '48rem', '54rem']} mx="auto">
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
            <Button {...actionButtonFormProps}>{buttonText}</Button>
            <Button
              width="18.75rem"
              onClick={handleClearForm}
              isDisabled={isGenerate}
            >
              Limpar
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}
