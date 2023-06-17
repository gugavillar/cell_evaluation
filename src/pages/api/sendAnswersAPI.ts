import { NextApiRequest, NextApiResponse } from 'next'

import { serialize } from 'cookie'
import { addWeeks } from 'date-fns'

import { TODAY } from '@/common/constants'
import { evaluationErrorsMessages } from '@/common/constants/evaluationMessages'
import { getEvaluationAndCellName, sendAnswersFauna } from '@/common/services'
import { validateJWT } from '@/common/validators'

export const sendAnswersAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const expires = addWeeks(TODAY, 1) // Week

  try {
    const { answers } = req.body

    const isValidToken = validateJWT(answers?.tokenEvaluation)

    if (!isValidToken)
      return res.status(401).json({ message: evaluationErrorsMessages[0] })

    const { data } = await getEvaluationAndCellName(answers?.id)

    if (!data?.is_active)
      return res.status(400).json({ message: evaluationErrorsMessages[1] })

    if (!data?.is_open)
      return res.status(400).json({ message: evaluationErrorsMessages[2] })

    await sendAnswersFauna(answers)

    res.setHeader(
      'Set-Cookie',
      serialize(answers?.id, 'true', {
        secure: true,
        httpOnly: true,
        path: '/',
        expires,
      }),
    )

    return res.status(201).json({ message: 'Answers received' })
  } catch (error) {
    console.log(error)
  }
}

export default sendAnswersAPI
