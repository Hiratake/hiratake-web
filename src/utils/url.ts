/**
 * ブログ投稿のURLをMarkdownファイルへのパスに変換する
 * @param url URL
 * @returns Markdownファイルへのパス
 */
export const blogUrlToPath = (url: string = ''): string => {
  if (/^\/blog\/\d{8}\/?$/.test(url)) {
    const year = url.replace('/blog/', '').slice(0, 4)
    const month = url.replace('/blog/', '').slice(4, 6)
    const date = url.replace('/blog/', '').slice(6, 8)
    return `/blog/${year}/${month}/${date}`
  } else {
    return url
  }
}

/**
 * ブログ投稿のMarkdownファイルへのパスをURLに変換する
 * @param path Markdownファイルへのパス
 * @returns URL
 */
export const blogPathToUrl = (path: string = ''): string => {
  if (/^\/blog\/\d{4}\/\d{2}\/\d{2}$/.test(path)) {
    return `/blog/${path.replace('/blog/', '').split('/').join('')}/`
  } else {
    return path
  }
}

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
