// Utils
import { withoutTrailingSlash, withTrailingSlash } from 'ufo'

/**
 * 末尾のスラッシュの設定を反映したURLを返す
 * @param val URL
 * @returns 末尾のスラッシュの設定を反映したURL
 */
export const useTrailingSlash = (val: string): string => {
  const site = useSiteConfig()
  const trailingSlash = (site.trailingSlash as boolean | undefined) || false
  return trailingSlash ? withTrailingSlash(val) : withoutTrailingSlash(val)
}
