<template>
  <div class="l-root">
    <Header />
    <Footer />
  </div>
</template>

<script>
// Components
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
