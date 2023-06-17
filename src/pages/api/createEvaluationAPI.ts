import { NextApiRequest, NextApiResponse } from 'next'

import jwt from 'jsonwebtoken'

import { TODAY } from '@/common/constants'
import { createEvaluationFauna } from '@/common/services'

export const createEvaluationAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { cellRef } = req.body

    const token = jwt.sign(
      { cellRef, today: TODAY },
      process.env.JWT_KEY as string,
    )

    const evaluation = {
      cellRef,
      token,
    }

    const response = await createEvaluationFauna(evaluation)

    const qrLink = `${process.env.NEXT_PUBLIC_API_GOOGLE}?chs=300x300&cht=qr&chl=${process.env.NEXT_PUBLIC_SITE}/avaliacao/${response?.ref?.value?.id}`

    return res.status(201).json({ qrLink })
  } catch (error) {
    console.log(error)
  }
}

export default createEvaluationAPI
