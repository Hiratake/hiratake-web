<template>
  <section class="p-worksSection">
    <Wrap>
      <WorksSectionHeading />
      <WorksSectionList />
    </Wrap>
  </section>
</template>

<script>
// Components
import WorksSectionHeading  from './WorksSectionHeading';
import WorksSectionList     from './WorksSectionList';
import Wrap                 from './Wrap';

export default {
  components: {
    WorksSectionHeading,
    WorksSectionList,
    Wrap
  }
}
</script>

<style lang="scss">
.p-worksSection {
  padding-top: $size-base*12;
  padding-bottom: $size-base*12;
  background: $color-white;

  @include bp( md ) {
    padding-top: $size-base*16;
    padding-bottom: $size-base*16;
  }
}
</style>
