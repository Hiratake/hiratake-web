/**
 * パスからuseAsyncDataで使用するキーを生成する
 * @param path useAsyncDataで取得するコンテンツのパス
 * @param name 指定したパスに関連して取得するデータの一意な名前
 * @returns useAsyncDataで使用するキー
 */
export const pathToUseAsyncDataKey = (
  path: string,
  ...name: string[]
): string => {
  const generatedPath = path
    .split('/')
    .filter((item) => item)
    .join('-')
  const generatedName = name.map((item) => `_${item}`).join('')
  return `${generatedPath}${generatedName}`
}

/**
 * WCAG の定義に基づいて sRGB の相対輝度を求める
 * @param color 6 桁の sRGB カラーコード
 * @returns 0 から 1 の範囲の相対輝度
 */
export const getRelativeLuminance = (color: string): number => {
  const rgb = Number.parseInt(color.slice(1), 16)

  /**
   * sRGB の色成分を線形値に変換する
   * @param channel 0 から 255 の範囲の色成分
   * @returns 0 から 1 の範囲の線形値
   */
  const linearize = (channel: number): number => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  }

  const red = linearize((rgb >> 16) & 255)
  const green = linearize((rgb >> 8) & 255)
  const blue = linearize(rgb & 255)

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

/**
 * 2 色の相対輝度からコントラスト比を求める
 * @param first 1 色目の相対輝度
 * @param second 2 色目の相対輝度
 * @returns 1 から 21 の範囲のコントラスト比
 */
export const getContrastRatio = (first: number, second: number): number => {
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05)
}
