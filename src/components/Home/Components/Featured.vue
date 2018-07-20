<template>
  <div class="wrapper mb-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 xl2 offset-xl1 shrink class="mr-5">
          <div class="title-box mb-4">
            <h2 class="subtitle mb-0">
              // Sumner & Puyallup
            </h2>
            <h1 class="titlize mb-1">Featured</h1>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md6 xl4 shrink>
          <span class="title-content">
            Explore & Discover Sumner and Puyallups culture<br />
            local food, drink, attractions and more.
          </span>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex d-flex xs12 sm6 justify-end>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card class="featured-small" dark tile flat>
                <v-card-media :src="featured.photoUrl" height="260px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="subheadline white--text" v-text="featured.category"></span>
                        <br />
                        <span class="headline white--text" v-text="featured.name"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
              <v-card class="featured-small" dark tile flat>
                <v-card-media :src="featured.photoUrl" height="260px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="subheadline white--text" v-text="featured.category"></span>
                        <br />
                        <span class="headline white--text" v-text="featured.name"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card class="featured-long" dark tile flat>
                <v-card-media :src="featured.photoUrl" height="260px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="subheadline white--text" v-text="featured.category"></span>
                        <br />
                        <span class="headline white--text" v-text="featured.name"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 xl4 justify-start>
          <v-card class="featured">
            <v-card-media :src="featured.photoUrl" height="550px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="subheadline white--text" v-text="featured.category"></span><br />
                    <span class="headline white--text" v-text="featured.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
      featureds: [
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Mama Stortini`s', category: 'Restaurant', featured: true },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Mama Stortini`s', category: 'Restaurant', featured: false },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Mama Stortini`s', category: 'Restaurant', featured: false },
        { photoUrl: 'https://pbs.twimg.com/media/DGV4VvrUIAA89TI.jpg', name: 'Mama Stortini`s', category: 'Restaurant', featured: false },
      ],
    };
  },
  computed: {
    featured() {
      let featured = null;
      for (let i = 0; i < this.featureds.length; i++) {
        if (this.featureds[i].featured) {
          featured = this.featureds[i];
        }
      }
      return featured;
    },
  },
};
</script>

<style scoped lang="scss">
  div.wrapper {
    margin-top: 60px;

    .title-box {

      @media only screen and (min-width: 1007px) {
        border-right: 1px solid #e0e0e0;
      }

      .subtitle {
        color: #72ccd2;
      }
      .titlize {
        font-size: 32px;
        font-weight: 900;
        text-transform: capitalize;
        margin-top: -8px;
      }
    }
    .title-content {
      font-size: 18px;
      font-style: italic;
      color: #757575;
    }

    div.featured {
      display: inline-block;
      max-height: 550px;
      height: 550px;
      width: 550px;
      max-width: 550px;
      overflow: hidden;
      margin: 0px 8px 8px;

      &-small {
        display: inline-block;
        height: 260px;
        width: 260px;
        margin: 0px 8px 8px;
      }
      &-long {
        display: inline-block;
        height: 260px;
        width: 550px;
        margin: 14px 8px 8px;
      }
    }
    .subheadline {
      background-color: black;
      font-weight: 900;
      width: auto;
      margin-left: -8px;
      padding: 5px 15px;
      line-height: 30px;
    }
    .headline {
      background-color: #c1d82f;
      width: auto;
      margin-left: -8px;
      padding: 6px 15px;
      font-size: 20px !important;
      font-weight: 900;
    }
  }
</style>
