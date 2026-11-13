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
