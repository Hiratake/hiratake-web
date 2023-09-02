export const useWebsite = () => {
  const config = useRuntimeConfig()
  const app = useAppConfig()

  return computed(() => ({
    site: {
      url: config.public.siteUrl,
      name: config.public.siteName,
      description: config.public.siteDescription,
    },
    author: app.author,
    services: {
      gtm: config.public.gtmId,
      cloudflareImage: config.public.cloudflareImageHash,
    },
  }))
}

export type UseWebsiteReturn = ReturnType<typeof useWebsite>
