<template>
    <div>
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
            <h2
                    class="mt-2 mb-1"
                    slot="title">Grow Your Business</h2>
            <h1
                    class="mt-1 mb-1"
                    slot="subtitle">
                Join Now and Take Advantage of Our Member Benefits
            </h1>
        </app-signup>
    </div>
</template>

<script>
import Banner from './Components/Banner';
import Advertising from './Components/Advertising';
import Featured from './Components/Featured';
import Explore from './Components/Explore';
import Signup from './Components/Signup';
import Members from './Components/Members';
import Carousel from './Components/MemberCarousel';

export default {
  name: 'Landing',
  components: {
    appBanner: Banner,
    appAdvertising: Advertising,
    appFeatured: Featured,
    appSignup: Signup,
    appExplore: Explore,
    appMembers: Members,
    appCarousel: Carousel,
  },
  data: () => ({
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
  }),
	computed: {
		randomAd() {
			const rand = Math.floor(Math.random() * this.ads.length);
			return this.ads[rand];
		},
	},
};
</script>

<style scoped lang="scss">

</style>
