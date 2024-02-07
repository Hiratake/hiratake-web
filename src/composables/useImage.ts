/** 画像配信プロバイダ */
type UseImageProvider = 'cloudflare'

export type UseImageOptions = {
  /** 画像のID */
  id?: string
  /** 画像配信プロパイダ */
  provider?: UseImageProvider
  /** 画像の幅 */
  width?: string | number
}

export const useImage = (options: UseImageOptions = {}) => {
  const website = useWebsite()

  if (options?.provider === 'cloudflare') {
    // Cloudflare Images
    return computed<string>(() =>
      [
        website.value.site.url,
        '/cdn-cgi/imagedelivery/',
        website.value.services.cloudflareImage,
        '/',
        options?.id || '',
        options.width ? `/w=${options.width}` : '',
      ].join(''),
    )
  } else {
    // 該当なし
    return computed<string>(() => options?.id || '')
  }
}

export type UseImageReturn = ReturnType<typeof useImage>
