<template>
  <app-container class="page" tag="main">
    <div class="page__error">
      <p class="page__error-code">{{ status }}</p>
      <p class="page__title">{{ title }}</p>
      <p class="page__error-message">{{ message }}</p>
    </div>
  </app-container>
</template>

<script>
export default {
  props: {
    error: {
      default: () => {},
      type: Object,
      required: true,
    },
  },

  head () {
    return {
      title: this.title,
    }
  },

  computed: {
    status () {
      return this.error.statusCode
    },
    title () {
      const notFound = 'ページがみつかりません'
      const serverError = 'エラーが発生しました'
      return this.status === 404 ? notFound : serverError
    },
    message () {
      const notFound =
        'あなたがアクセスしようとしたページは削除されたか、別の場所に移動されています。URLに間違いがないかお確かめの上、元のページへお戻りいただくか、ページ上部のロゴを押してトップページへ移動してください。'
      const serverError =
        'あなたがアクセスしようとしたページはウェブサイト管理者の力量不足のためバグまみれになっているか、工事中の可能性があります。URLに間違いがないかお確かめの上、元のページへお戻りいただくか、ページ上部のロゴを押してトップページへ移動してください。'
      return this.status === 404 ? notFound : serverError
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.page';

.page {
  padding-bottom: 48px;
}

.page__error {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 16px;
  max-width: 480px;
  margin: auto;
  text-align: center;
}

.page__error-code {
  font-family: $font-family-en;
  font-size: 80px;
  font-weight: $font-weight-bold;

  @include breakpoint(md) {
    font-size: 120px;
  }
}

.page__title {
  font-size: 13px;
  font-weight: $font-weight-bold;
}

.page__error-message {
  font-size: 13px;
  line-height: 1.75;
  color: var(--color-text-muted);
}
</style>
