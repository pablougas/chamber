<template>
  <div>
    <app-join></app-join>
    <app-nav app/>
    <app-banner />
    <app-advertising :advertisements="ads">
      <h2 class="mt-1 mb-1" slot="title">A Voice For Business</h2>
      <h1 class="mt-1 mb-2" slot="subtitle">Dedicated To The Success of Our Community</h1>
    </app-advertising>
    <app-featured />
    <app-explore />
    <app-members />
    <app-carousel
      :member-list="memberList">
      <h1 class="mt-2 mb-2" slot="title">Our Proud Members</h1>
      <p slot="subtitle">Stuff about our favorite and great members here</p>
    </app-carousel>
    <app-signup>
      <h2 class="mt-2 mb-1" slot="title">Grow Your Business</h2>
      <h1 class="mt-1 mb-1" slot="subtitle">Join Now and Take Advantage of Our Member Benefits</h1>
    </app-signup>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './Components/Header';
import Banner from './Components/Banner';
import Advertising from './Components/Advertising';
import Featured from './Components/Featured';
import Explore from './Components/Explore';
import Signup from './Components/Signup';
import JoinNow from './Components/JoinNow';
import Members from './Components/Members';
import Carousel from './Components/MemberCarousel';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default {
  name: 'Main',
  data() {
    return {
      showContact: false,
      ads: [
        {
          photoUrl: 'http://via.placeholder.com/500x100',
          website: 'www.wellsfargo.com',
        },
        {
          photoUrl: 'http://via.placeholder.com/500x100',
          website: 'www.sky9.us',
        },
        {
          photoUrl: 'http://via.placeholder.com/500x100',
          website: 'www.sky9.us',
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
    randomAd() {
      const rand = Math.floor(Math.random() * this.ads.length);
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
    appJoin: JoinNow,
    appMembers: Members,
    appCarousel: Carousel,
    appContact: Contact,
    appFooter: Footer,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Sans:300,400,700');
  body {
    font-family: 'Karla', sans-serif;

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
    }
    h1 {
      font-size: 2.5em;
    }
    .text--white {
      color: white !important;
    }
    .slick-prev:before {
      color: #72ccd2;
      font-size: 30px;
      margin-left: -10px;
    }

    .slick-next:before {
      color: #72ccd2;
      font-size: 30px;
      margin-right: -10px;
    }
  }
</style>
