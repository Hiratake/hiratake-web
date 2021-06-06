<template>
  <app-container class="page" tag="main"></app-container>
</template>

<script>
export default {
  async asyncData ({ params, error, $content }) {
    const { slug } = params
    try {
      const post = await $content('blog', slug).fetch()
      return { post }
    }
    catch (e) {
      error({ statusCode: 404 })
    }
  },

  head () {
    return {
      title: this.post.title,
    }
  },
}
</script>
