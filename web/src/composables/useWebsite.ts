export const useWebsite = () => {
  const config = useRuntimeConfig()
  const site = useSiteConfig()
  const app = useAppConfig()

  return computed(() => ({
    site: {
      url: site.url,
      name: site.name,
      description: site.description,
    },
    author: app.author,
    services: {
      gtm: config.public.gtmId,
      cloudflareImage: config.public.cloudflareImageHash,
    },
  }))
}

export type UseWebsiteReturn = ReturnType<typeof useWebsite>
