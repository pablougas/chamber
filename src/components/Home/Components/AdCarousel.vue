<template>
  <v-layout row justify-center align-content-middle>
    <v-flex shrink xs12 md6 class="mt-4 ad-carousel">
      <slick
        ref="adSlick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazeLoadError">
        <a v-for="(ad, index) in adss" href="'http://'+ ad.website" :key="index" target="_blank">
          <img :src="ad.photoUrl" alt="ad.website">
        </a>
      </slick>
    </v-flex>
  </v-layout>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'AdCarousel',
  props: ['adss'],
  components: { Slick },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        variableWidth: true,
      },
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.adSlick.next();
    },

    prev() {
      this.$refs.adSlick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.adSlick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      // console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      // console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      // console.log('handleDestroy', event, slick);
    },
    handleEdge(event, slick, direction) {
      // console.log('handleEdge', event, slick, direction);
    },
    handleInit(event, slick) {
      // console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
      // console.log('handleReInit', event, slick);
    },
    handleSetPosition(event, slick) {
      // console.log('handleSetPosition', event, slick);
    },
    handleSwipe(event, slick, direction) {
      // console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      // console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      // console.log('handleLazeLoadError', event, slick, image, imageSource);
    },
  },
};
</script>

<style lang="scss">
  .ad-carousel {

    .slick-slide img {
      max-height: 100px;
      max-width: 100%;
    }
  }
</style>
