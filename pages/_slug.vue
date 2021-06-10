<template>
  <app-container class="page" tag="main"></app-container>
</template>

<script>
export default {
  async asyncData ({ params, error, $content, $cloudinary }) {
    const { slug } = params
    try {
      const post = await $content('blog', slug).fetch()
      post.image = await $cloudinary.image.url(
        'post_uakfpm.png',
        {
          overlay: {
            font_family: 'notosansjp.otf',
            font_size: 56,
            text: encodeURI(post.title),
          },
          color: '#394147',
          width: 1000,
          x: 128,
          y: 136,
          gravity: 'north_west',
          crop: 'fit',
        },
      )
      if (post.description) {
        if (post.description.length > 80) {
          post.description = (
            post.description.substr(0, 80) + '...'
          )
        }
        post.description = post.description.replace(/\r?\n/g, '')
      }
      else {
        post.description = null
      }
      return { post }
    }
    catch (e) {
      error({ statusCode: 404 })
    }
  },

  head () {
    const post = this.post
    const meta = []
    meta.push({
      hid: 'description',
      name: 'description',
      content: post.description ? post.description : this.$config.baseDescription,
    })
    meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: `${this.$config.baseUrl}/${post.slug}`,
    })
    meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: post.title,
    })
    meta.push({
      hid: 'og:description',
      property: 'og:description',
      content: post.description ? post.description : this.$config.baseDescription,
    })
    meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: post.image,
    })
    meta.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    return {
      title: post.title,
      meta,
      link: [
        { rel: 'canonical', href: `${this.$config.baseUrl}/${post.slug}` },
      ],
    }
  },

  jsonld () {
    const breadcrumbs = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': (`${this.$config.baseUrl}${item.to}`).replace(/^(.*)\/$/, '$1'),
        name: item.label,
      },
    }))
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs,
      },
    ]
  },

  computed: {
    breadcrumbs () {
      return [
        {
          label: 'Home',
          to: '/',
          disabled: false,
        },
        {
          label: this.post.title,
          to: `/${this.post.slug}`,
          disabled: true,
        },
      ]
    },
  },
}
</script>
