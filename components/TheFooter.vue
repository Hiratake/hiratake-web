<template>
  <app-container tag="footer" class="the-footer">
    <div class="the-footer__body">
      <p class="the-footer__copyright">
        &copy; 2014-{{ currentYear }} {{ $config.baseName }}
      </p>
    </div>
  </app-container>
</template>

<script>
export default {
  name: 'TheFooter',

  computed: {
    currentYear () {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.the-footer';

.the-footer {
  background-color: transparent;
}

.the-footer__body {
  padding: 32px 40px;
}

.the-footer__copyright {
  font-family: $font-family-en;
  font-size: 14px;
  text-align: center;
}
</style>
