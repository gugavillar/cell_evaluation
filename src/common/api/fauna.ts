import { Client, query } from 'faunadb'

export const faunaAPI = new Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY as string,
})

export const faunaQ = query
