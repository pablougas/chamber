<template>
  <v-container fluid class="pa-5">
    <v-layout row wrap class="mb-5 scroll mt-3 pt-5" justify-center align-content-middle>
      <v-flex xs12 class="text-xs-center">
        <slot name="title">Recently Added Members</slot>
        <slot class="mt-3" name="subtitle">Stuff about members and stuff here...</slot>
      </v-flex>
    </v-layout>
    <v-layout row justify-center align-content-middle>
      <v-flex shrink xs12 md8 class="mb-5">
        <slick
          ref="slick"
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
          <a v-for="(member, index) in memberList" href="'http://'+ member.website" :key="index" class="ma-3" target="_blank">
            <img :src="member.photoUrl" alt="member.website" height="150px">
          </a>
        </slick>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'MemberCarousel',
  props: ['member-list'],
  components: { Slick },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        infinite: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
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

<style scoped lang="scss">
  .container {
    background-color: white;
  }
</style>
