<template>
  <div class="wrapper">
    <v-container fluid>
      <v-layout justify-space-around align-content-center>
        <v-flex shrink justify-center class="text-xs-center text--white">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </v-flex>
      </v-layout>
    </v-container>
    <app-ad-carousel />
  </div>
</template>

<script>
import AdCarousel from './AdCarousel';

export default {
  name: 'Advertising',
  props: ['advertisements'],
  components: {
    appAdCarousel: AdCarousel,
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    text-align: center;
    .container {
      background-color: #72ccd2;
      min-height: 100px;
      overflow: hidden;
    }
  }
</style>
