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
    }
  },
}
</script>
