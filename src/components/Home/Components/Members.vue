<template>
  <div class="wrapper">
    <v-container grid-list-md>
      <v-layout row wrap class="mb-5">
        <v-flex xs12 class="ml-3 mr-5 text-xs-center">
          <h1 class="mt-2 mb-2">Recently Added Members</h1>
          <p>Stuff about members and stuff here...</p>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-5">
        <v-flex xs10 offset-xs1 sm8 offset-sm2 lg6 offset-lg3 xl4 offset-xl4 justify-center>
          <div class="member-feature mb-5 mt-3" v-for="(member,index) in newMembers" :key="index">
            <v-avatar
              size="220"
              color="grey lighten-4"
              class="hidden-sm-and-down">
              <img :src="member.photoUrl" :alt="member.name" />
              <h3 class="category">{{ member.category }}</h3>
            </v-avatar>
            <v-avatar
              size="100"
              color="grey lighten-4"
              class="hidden-md-and-up">
              <img :src="member.photoUrl" :alt="member.name" />
            </v-avatar>
            <div class="member-content pt-4 pr-4">
              <h1 class="ml-4">{{ member.name }}</h1>
              <p>
                {{ member.street }}<br>
                {{ member.city }}, {{ member.state }} {{ member.zip }}
              </p>
              <p>
                <a target="_blank" :href="'http://' + member.website" class="link">
                  {{ member.website }}
                  <v-icon class="ml-1">public</v-icon>
                </a>
              </p>
              <p>
                <a target="_blank" :href="'http://' + member.website" class="link">
                  {{ member.phone }}
                  <v-icon class="ml-1">phone</v-icon>
                </a>
              </p>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex shrink xs12 height="100px">
          <app-carousel :member-list="memberList"></app-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Carousel from './MemberCarousel';

export default {
  name: 'Members',
  data() {
    return {
      newMembers: [
        { category: 'Bar', photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Stanley Realty', street: '123 Main St.', city: 'Sumner', state: 'WA', zip: '98391', website: 'www.website.com', phone: '253 255-5500' },
        { category: 'Restaurant', photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Cafe 19', street: '123 Main St.', city: 'Puyallup', state: 'WA', zip: '98391', website: 'www.website.com', phone: '253 255-5500' },
        { category: 'Coffee', photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Blazin` Saddles', street: '123 Main St.', city: 'Puyallup', state: 'WA', zip: '98391', website: 'www.website.com', phone: '253 255-5500' },
        { category: 'Tours', photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Heritage Bank', street: '123 Main St.', city: 'Sumner', state: 'WA', zip: '98391', website: 'www.website.com', phone: '253 255-5500' },
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
  components: {
    appCarousel: Carousel,
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    height: auto;

    .container {

      .member-feature {
        position: relative;
        background-color: white;
        text-align: right;
        min-height: 220px;

        @media only screen and (max-width: 960px) {
          min-height: 100px;
        }

        .v-avatar {
          border: 12px solid white;
          float: left;
          left: -100px;

          @media only screen and (max-width: 960px) {
            left: -50px;
          }
          img {
            border-style: solid;
            border-width: 12px;
            border-color: white;
          }
          .category {
            position: absolute;
            bottom: 20px;
            background-color: #c1d82f;
            padding: 6px 15px;
            width: 100%;
          }
        }

        h1 {
          color: #0076c0;
        }
        p {
          font-size: 16px;
          font-weight: 300;
          color: #7f8c8d;

          .link {
            color: #72ccd2;
            text-decoration: none;
            .v-icon {
              color: #72ccd2;
              vertical-align: text-bottom;
            }
          }
        }
      }
    }
  }
</style>
