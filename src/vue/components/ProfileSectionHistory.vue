<template>
  <div class="p-profileSectionHistory">
    <ul class="p-profileSectionHistory__list">
      <li class="p-profileSectionHistory__item"
          v-for="item in list" :key="item.id">
        <span class="p-profileSectionHistory__year">
          {{ item.year}}
        </span>
        <span class="p-profileSectionHistory__text">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          year: 97,
          text: '石川県小松市で生まれる。'
        },
        {
          id: 2,
          year: 13,
          text: '石川高専電子情報工学科に入学。'
        },
        {
          id: 3,
          year: 14,
          text: 'WEBサイトに興味を持ち、自主的に学習を開始。'
        },
        {
          id: 4,
          year: 18,
          text: '石川県内の会社でPHPを用いたWEBシステム開発の業務を行う。'
        },
        {
          id: 5,
          year: 19,
          text: '大阪市内の会社でデザイン・マークアップなどの業務を行う。'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.p-profileSectionHistory {
  width: 100%;
  max-width: $size-base*31;
  padding-top: $size-base*10;

  @include bp( md ) {
    max-width: $size-base*64;
    padding-top: 0;
  }
}
.p-profileSectionHistory__list {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat( 5, auto );
  gap: $size-base*3;
  position: relative;
  list-style: none;

  &::before {
    content: "";
    width: $size-base/2;
    height: 90%;
    margin: auto;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ( $size-base*5 / 2 ) - $size-base/4;
    z-index: 10;
    background: $color-primary;
  }
}
.p-profileSectionHistory__item {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 15;
}
.p-profileSectionHistory__year {
  min-width: $size-base*5;
  height: $size-base*5;
  color: $color-white;
  background: $color-primary;
  font-family: $font-family-en;
  font-size: $font-size-l3;
  line-height: $size-base*5;
  text-align: center;
  border-radius: 50%;

  @include bp( md ) {
    font-size: $font-size-l4;
  }
}
.p-profileSectionHistory__text {
  padding-left: $size-base*2;
  font-size: $font-size-l2;
}
</style>
