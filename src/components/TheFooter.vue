<template>
  <footer
    class="the-footer"
    role="contentinfo"
  >
    <p class="the-footer__copyright">
      &copy; 2014-{{ currentYear }} Hiratake
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>

<style scoped>
.the-footer {
  display: flex;
  align-items: center;
}

.the-footer__copyright {
  font-family: 'Sofia Pro', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: inherit;
}
</style>
