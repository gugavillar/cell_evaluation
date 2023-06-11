import jwt, { JwtPayload } from 'jsonwebtoken'

export const validateJWT = (token: string) => {
  if (!token) return false

  jwt.verify(token, process.env.JWT_KEY as string) as JwtPayload

  return true
}
