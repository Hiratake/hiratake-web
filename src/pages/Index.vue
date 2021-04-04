<template>
  <Layout>
    <div class="page">
      <div class="page__header">
        <img
          src="https://secure.gravatar.com/avatar/16f38857b5cc103612d1c3f2ff5df26e?s=136"
          alt="icon"
          class="page__icon"
          loading="lazy"
        >
      </div>
      <div class="page__body">
        <p class="page__name">{{ name }}</p>
        <p class="page__bio">{{ bio }}</p>
        <nav class="page__navigation">
          <ul class="page__navigation">
            <template v-for="item in navigation">
              <li :key="item.id">
                <g-link
                  :to="item.to"
                  :title="item.title"
                >
                  {{ item.label }}
                </g-link>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  computed: {
    name() {
      return 'I am Hiratake.'
    },
    bio() {
      return '大阪でマークアップ園児とデザイナーやってます。'
    },
    navigation() {
      return [
        {
          id: 'blog',
          to: '/blog',
          label: 'Blog',
          title: 'ブログ',
        },
        {
          id: 'works',
          to: '/works',
          label: 'Works',
          title: '制作実績',
        },
        {
          id: 'contact',
          to: '/contact',
          label: 'Contact',
          title: '連絡先',
        },
      ]
    },
  },
}
</script>

<style>
.page {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 32px;
  justify-items: center;
  max-width: 264px;
  text-align: center;
}

.page__body {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 21px;
  justify-items: center;
}

.page__icon {
  display: block;
  border-radius: 50%;
}

.page__name {
  font-family: 'Sofia Pro', sans-serif;
  font-size: 40px;
  font-weight: 700;
}

.page__bio {
  font-size: 14px;
  color: var(--color-text-lighten);
}

.page__navigation ul {
  display: flex;
  list-style: none;
}

.page__navigation li ~ li {
  margin-left: 16px;
}

.page__navigation a {
  position: relative;
  display: block;
  padding: 4px 2px;
  font-family: 'Sofia Pro', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  transition-duration: var(--transition-duration);
}

.page__navigation a:hover {
  color: var(--color-text-lighten);
}

.page__navigation a::before,
.page__navigation a::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  content: '';
  background-color: var(--color-primary);
}

.page__navigation a::before {
  opacity: 0.32;
}

.page__navigation a::after {
  transition-duration: inherit;
}

.page__navigation a:hover::after {
  width: 4px;
}
</style>
