<template>
  <div id="banner">
    <video autoplay muted loop id="myVideo" ref="video">
      <source src="@/assets/rain.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <app-search :categories="links" />
    <app-sub-nav :categories="links" class="hidden-sm-and-down"/>
  </div>
</template>

<script>
import SubNav from './SubMenu'
import Search from './Search'

export default {
  name: 'Banner',
  data() {
    return {
      links: [
        { icon: 'hotel', text: 'Accomodations', color: 'light-blue lighten-1' },
        { icon: 'event', text: 'Events', color: 'blue darken-1' },
        { icon: 'directions_walk', text: 'Hiking', color: 'orange lighten-2' },
        { icon: 'fastfood', text: 'Restaurants', color: 'yellow darken-4' },
        { icon: 'local_bar', text: 'Night Life', color: 'red darken-3' },
        { icon: 'store_mall_directory', text: 'Shopping', color: 'indigo' },
        { icon: 'local_cafe', text: 'Cafes', color: 'cyan' },
        { icon: 'local_see', text: 'Attractions', color: 'orange darken-5' },
      ]
    };
  },
  components: {
    appSubNav: SubNav,
    appSearch: Search,
  }
};
</script>

<style scoped lang="scss">
  #banner {
    position: relative;
    display: flex;
    justify-content: center;
    height: 660px;
    overflow: hidden;

    #myVideo {
      position: absolute;
      right: 0;
      height: auto;
      min-width: 100%;
    }
  }
</style>
