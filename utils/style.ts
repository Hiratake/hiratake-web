// utils > style

/**
 * pxをremに変換する関数
 * @param px px単位のサイズ
 * @returns rem単位のサイズ
 */
export const rem = (px: number): `${number}rem` => {
  return `${px / 16}rem`
}
