<template>
  <div class="wrapper">
    <div class="overlay">
      <v-container grid-list-md align-content-middle justify-center>
        <v-layout row wrap>
          <v-flex xs12 md6 class="text-sm-left text-md-right mt-5">
            <h1>
              Explore our
            </h1>
          </v-flex>
          <v-flex xs12 md5 class="ml-3 text-xs-center text-md-left mt-5">
            <h1>
              <app-typer :text="scrollingText"></app-typer>
            </h1>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-5">
          <v-flex xs12 md6 offset-md3 shrink class="mt-2 mb-4 text-xs-center">
            <h4>{{ puyallupDescription }}
              <span class="link"> read more</span>
            </h4>
          </v-flex>
          <v-flex xs12 md6 offset-md3 shrink class="mt-1 mb-4 text-xs-center">
            <h4>{{ sumnerDescription }}
              <span class="link"> read more</span>
            </h4>
          </v-flex>
        </v-layout>
        <hr />
        <v-layout row wrap class="text-xs-center hot-topics" justify-center>
          <v-flex
            class="mt-4 mb-5"
            xs12
            sm6
            md4
            lg2
            v-for="(topic, index) in topics" :key="index">
            <v-icon color="white" class="mb-4 mt-4">{{ topic.icon }}</v-icon>
            <h3 class="mb-3">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import TypeWriter from './TypeWriter';

export default {
  name: 'Explore',
  data() {
    return {
      scrollingText: ['hotels', 'attractions', 'trails', 'shops', 'restaurants', 'farms'],
      puyallupDescription: 'Puyallup is rooted in rich agricultural heritage and continues to ' +
      'celebrate one of its most famous pioneer homesteaders, Ezra Meeker, best known for making the ' +
      'trek west to his home in Puyallup by way of the Oregon trail...',
      sumnerDescription: 'Sumner is the town for some old-fashioned hospitality in the Rhubarb Pie ' +
      'Capital of the World. Historic Main Street is full of unique gifts and treasures. Stores offer personal ' +
      'service while restaurants and diners dish up a side of gossip with the local cuisine. If you’re only here ' +
      'for the night...',
      topics: [
        { icon: 'my_location', title: 'Advanced Directory Search', description: 'lorem ipsum dolor vini veritas  dolor vini veritas vidi vici lorem ipsum  vini veritas vidi vici lorem ipsum dolor vini veritas vidi vici'},
        { icon: 'store_mall_directory', title: 'Shop Local', description: 'lorem ipsum dolor vini veritas vidi vici lorem  dolor vini veritas vidi vici lorem ipsum dolor vini veritas vidi vici lorem ipsum dolor vini veritas vidi vici'},
        { icon: 'local_florist', title: 'Find Local Attractions', description: 'lorem ipsum dolor vini veritas vidi vici lorem ipsum dolor vini veritas vidi vici'},
        { icon: 'search', title: 'Explore Your City', description: 'lorem ipsum dolor vi veritas vidi vici ipsum dolor vini veritas vidi vici lorem ipsum dolor vini veritas vidi vici'},
      ],
    };
  },
  components: {
    appTyper: TypeWriter,
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    color: white;
    height: auto;
    min-height: 400px;
    background: url('http://andyporterimages.com/wp-content/uploads/2015/08/Skagit-Valley-Tulip-Festival-2015-7.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position-y: bottom;

    .overlay {
      height: 100%;
      width: 100%;
      min-height: 400px;
      background-color: rgba(0,0,0,.4);

      hr {
        width: 25%;
        margin-left: 36%;
        color: #ecf0f1;
        margin-bottom: 25px
      }

      h1 {
        font-size: 50px;
        text-shadow: 1.5px 2px rgba(0,0,0,.2);
      }

      h4 {
        font-size: 1.2em;
        text-shadow: 2px 2px rgba(0,0,0,.8);

        .link {
          color: #72ccd2;
        }
      }

      .hot-topics {
        i {
          font-size: 5.5em;
          display: block;
        }
        h3 {
          font-weight: 400;
        }
        p {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
</style>

