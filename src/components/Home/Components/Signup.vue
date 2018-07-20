<template>
  <div class="wrapper">
    <v-container grid-list-md fluid align-content-middle>
      <v-layout row wrap justify-center align-content-middle class="mt-5">
        <v-flex xs12 class="text-xs-center text--white">
          <slot name="title">Default Title</slot>
          <slot name="subtitle">Default Lorem Ipsum Subtitle</slot>
        </v-flex>
      </v-layout>
      <v-layout justify-center align-content-middle class="mt-5">
        <v-flex xs12 sm10 md8 justify-center align-content-middle>
          <v-layout row wrap justify-center>
            <v-flex
              v-for="(benefit,index) in benefits" :key="index"
              shrink
              xs6
              sm4
              md4
              lg3
              xl2
              class="icon-tip ma-2 text-xs-center pa-5"
              justify-center
              align-start>
              <v-icon :color="benefit.color">{{ benefit.icon }}</v-icon>
              <h2>{{ benefit.title }}</h2>
              <p>{{ benefit.description }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      benefits: [
        { icon: 'event', title: 'Sample Title', description: 'our members see an increase of 30%! Wow!', color: 'light-green' },
        { icon: 'event', title: 'Lorem Ipsum', description: 'our members see an increase of 30%! Wow!', color: 'white' },
        { icon: 'event', title: 'Sample Title maybe longer', description: 'our members see an increase of 30%! Wow!', color: 'blue lighten-1' },
        { icon: 'event', title: 'Lorem Ipsume', description: 'our members see an increase of 30%! Wow!', color: 'orange darken-2' },
        { icon: 'event', title: 'Sample Title', description: 'our members see an increase of 30%! Wow!', color: 'brown lighten-1' },
        { icon: 'event', title: 'Lorem Ipsum', description: 'our members see an increase of 30%! Wow!', color: 'red lighten-2' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    background: url(http://sumnerwa.gov/wp-content/uploads/2016/12/Santa16_Tractors.jpg) no-repeat center top fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    .container {
      background-color: rgba(0,0,0,.5);

      .icon-tip {
        color: white;
        min-height: 100px;

        i {
          display: block;
          font-size: 4em;
        }
        p {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  </style>
