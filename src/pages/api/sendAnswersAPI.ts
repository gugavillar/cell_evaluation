import { NextApiRequest, NextApiResponse } from 'next'

import { serialize } from 'cookie'
import { addWeeks } from 'date-fns'

import { TODAY } from '@/common/constants'
import { sendAnswersFauna } from '@/common/services'
import { validateJWT } from '@/common/validators'

export const sendAnswersAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const expires = addWeeks(TODAY, 1) // Week

  try {
    const { answers } = req.body

    const isValidToken = validateJWT(answers?.tokenEvaluation)

    if (!isValidToken) return res.status(401).json({ message: 'Invalid token' })

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
