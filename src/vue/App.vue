<template>
  <div class="l-root">
    <Header />
    <HeroSection />
    <ProfileSection />
    <WorksSection />
    <Footer />
  </div>
</template>

<script>
// Components
import Header         from './components/Header';
import HeroSection    from './components/HeroSection';
import Footer         from './components/Footer';
import ProfileSection from './components/ProfileSection';
import WorksSection   from './components/WorksSection';

export default {
  components: {
    Header,
    HeroSection,
    Footer,
    ProfileSection,
    WorksSection
  }
}
</script>

<style lang="scss">
.l-root {
  position: relative;
  background-color: $color-primary;
}
</style>
