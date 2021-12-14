import type { NextApiRequest, NextApiResponse } from 'next'
import { allEvents } from '../../../constants/events'
import { IEvent, Sport } from '../../../types'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<
    { [key in Sport]: IEvent[] } | IEvent[] | { error: string }
  >
) => {
  if (req.query?.slug) {
    if (!Object.values(Sport).includes(req.query.slug[0] as Sport)) {
      return res.status(400).json({ error: 'Sport not found' })
    }
    return res.status(200).json(allEvents[req.query.slug[0] as Sport])
  }

  return res.status(200).json(allEvents)
}

export default handler
