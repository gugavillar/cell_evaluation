import { NextApiRequest, NextApiResponse } from 'next'

import { sendAnswersFauna } from '@/common/services'
import { validateJWT } from '@/common/validators'

export const sendAnswersAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { answers } = req.body

    const isValidToken = validateJWT(answers?.tokenEvaluation)

    if (!isValidToken) return res.status(401).json({ message: 'Invalid token' })

    await sendAnswersFauna(answers)

    return res.status(201).json({ message: 'Answers received' })
  } catch (error) {
    console.log(error)
  }
}

export default sendAnswersAPI
