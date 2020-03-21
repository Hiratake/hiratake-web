<template>
  <section class="p-profileSection">
    <Wrap>
      <div class="p-profileSection__split">
        <ProfileSectionInfo />
        <ProfileSectionHistory />
      </div>
    </Wrap>
  </section>
</template>

<script>
// Components
import ProfileSectionHistory  from './ProfileSectionHistory';
import ProfileSectionInfo     from './ProfileSectionInfo';
import Wrap                   from './Wrap';
export default {
  components: {
    ProfileSectionHistory,
    ProfileSectionInfo,
    Wrap
  }
}
</script>

<style lang="scss">
.p-profileSection {
  margin-top: -1px;
  padding: $size-base*16 0;
  position: relative;
  z-index: 10;
  background: $color-white;
}
.p-profileSection__split {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @include bp( md ) {
    flex-wrap: nowrap;
  }
}
</style>
