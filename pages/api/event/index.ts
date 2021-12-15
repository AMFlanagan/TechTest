import type { NextApiRequest, NextApiResponse } from 'next'
import { allEvents } from '../../../constants/events'
import { IEvent } from '../../../types'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<
    { [key in Sport]: IEvent[] } | IEvent[] | { error: string }
  >
) => {
  return res.status(200).json(allEvents)
}

export default handler
