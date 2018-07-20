<template>
  <div>
    <app-nav app/>
    <app-banner />
    <app-advertising :ad="randomAd" />
    <app-featured />
    <app-explore />
    <app-members />
    <app-carousel
      :member-list="memberList">
      <h1 class="mt-2 mb-2" slot="title">Our Proud Members</h1>
      <p slot="subtitle">Stuff about our favorite and great members here</p>
    </app-carousel>
    <app-signup />
  </div>
</template>

<script>
import Navbar from './Components/Header';
import Banner from './Components/Banner';
import Advertising from './Components/Advertising';
import Featured from './Components/Featured';
import Explore from './Components/Explore';
import Signup from './Components/Signup';
import Members from './Components/Members';
import Carousel from './Components/MemberCarousel';

export default {
  name: 'Main',
  data() {
    return {
      ads: [
        {
          photoUrl: 'https://chambermaster.blob.core.windows.net/images/chambers/3207/sp/wells-fargo-banner.jpg',
          description: 'wells fargo',
        },
      ],
      memberList: [
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', website: 'www.website.com' },
      ],
    };
  },
  computed: {
    randomAd () {
      let rand = Math.floor(Math.random() * this.ads.length);
      return this.ads[rand];
    },
  },
  components: {
    appNav: Navbar,
    appBanner: Banner,
    appAdvertising: Advertising,
    appFeatured: Featured,
    appExplore: Explore,
    appSignup: Signup,
    appMembers: Members,
    appCarousel: Carousel,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Sans:300,400,700');
  body {
    font-family: 'IBM Plex Sans', sans-serif;

    h1, h2, h3, h4, h5, h6 {
      font-family: 'IBM Plex Sans Condensed', sans-serif;
    }
    h1 {
      font-size: 2.5em;
    }
  }
</style>
