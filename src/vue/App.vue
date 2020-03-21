<template>
  <div class="l-root">
    <Header />
    <HeroSection />
    <ProfileSection />
    <Footer />
  </div>
</template>

<script>
// Components
import Header         from './components/Header';
import HeroSection    from './components/HeroSection';
import Footer         from './components/Footer';
import ProfileSection from './components/ProfileSection';

export default {
  components: {
    Header,
    HeroSection,
    Footer,
    ProfileSection
  }
}
</script>

<style lang="scss">
.l-root {
  position: relative;
  background-color: $color-primary;
}
</style>
