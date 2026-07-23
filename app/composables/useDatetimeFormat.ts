/**
 * 日付の形式を変更する
 * @param val 形式を変更する日付
 * @returns 変換後の日付
 */
export const useDatetimeFormat = (val: string | Date = new Date()) => {
  return {
    /** ハイフン区切りの形式 */
    hyphen: useDateFormat(val, 'YYYY-MM-DD').value,
    /** スラッシュ区切りの形式 */
    slash: useDateFormat(val, 'YYYY/MM/DD').value,
  }
}

export type UseDatetimeFormatReturn = ReturnType<typeof useDatetimeFormat>
