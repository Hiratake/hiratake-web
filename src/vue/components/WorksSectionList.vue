<template>
  <ul class="p-worksSectionList">
    <li class="p-worksSectionList__item" v-for="item in list" :key="item.id">
      <span class="p-worksSectionList__label">{{ item.year }} - {{ item.type }}</span>
      <h4 class="p-worksSectionList__title">
        <span>{{ item.title }}</span>
      </h4>
      <p class="p-worksSectionList__description" v-html="item.description"></p>
      <div class="p-worksSectionList__thumbnail">
        <img :src="item.thumbnail" :alt="item.title">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          year: 2020,
          type: 'WEB',
          title: 'Hiratake.XYZ',
          description: '「ひらたけ」という名前で活動する私の、個人サイト。ただの自己顕示欲と自己満足のカタマリかもしれない。<br>今現在ご覧いただいているサイトです。',
          thumbnail: './img/works01.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.p-worksSectionList {
  width: 100%;
  max-width: $size-base*56;
  margin: auto;
  padding-top: $size-base*4;
  list-style: none;

  @include bp( md ) {
    max-width: 100%;
    padding-top: $size-base*8;
  }
}
.p-worksSectionList__item {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat( 4, auto );
  gap: $size-base*1 $size-base*8;

  @include bp( md ) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat( 3, auto );
  }

  & ~ & {
    padding-top: $size-base*8;
  }
}
.p-worksSectionList__label {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  font-family: $font-family-en;

  @include bp( md ) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}
.p-worksSectionList__title {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  font-size: $font-size-l5;
  font-weight: $font-weight-normal;

  @include bp( md ) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  span {
    padding-bottom: $size-base;
    border-bottom: solid $size-base $color-primary;

    @include bp( md ) {
      padding-bottom: $size-base/2;
    }
  }
}
.p-worksSectionList__description {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  padding-top: $size-base*3;
  padding-bottom: $size-base*3;
  font-size: $font-size-l2;

  @include bp( md ) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    padding-bottom: 0;
  }
}
.p-worksSectionList__thumbnail {
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 $size-base $color-shadow;

  @include bp( md ) {
    grid-row: 1 / 4;
    grid-column: 1 / 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
