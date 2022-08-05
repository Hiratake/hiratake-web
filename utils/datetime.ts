// utils > datetime

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatDatetime = (
  ...args: Parameters<typeof dayjs.utc>
): string => {
  const [value, format] = args
  return dayjs.utc(value).tz('Asia/Tokyo').format(format)
}
