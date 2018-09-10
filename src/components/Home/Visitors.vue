<template>
  <div>
    <v-container fluid class="pa-0">
      <v-parallax :src="image"></v-parallax>
    </v-container>
    <v-layout justify-space-around row wrap class="mt-4">
      <v-flex xs12 sm4 >
        <v-card color="grey lighten-4" class="mb-5" :class="{'hover': $vuetify.breakpoint.mdAndUp}">
          <v-card-title>
              <span class="blue--text text--lighten-2 display-1">Puyallup - Sumner</span>
          </v-card-title>
          <v-navigation-drawer width="100%">
            <v-list>
              <v-list-tile
                v-for="(actvt, i) in actvts"
                :key="i"
                @click=""
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ actvt }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-card>
        <v-card>
          <v-card-text>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6>
          <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras et lacinia arcu,
              nec iaculis libero. Vivamus eu risus nec urna finibus viverra. Etiam lacinia
              imperdiet vestibulum. Donec et ante eget augue maximus fringilla. Nulla facilisi.
              Proin efficitur pharetra condimentum. Quisque bibendum, elit vitae rhoncus faucibus,
              lorem erat interdum leo, a tristique arcu dolor vel nibh. Donec mi mi, faucibus at
              massa non, suscipit elementum erat. Cras bibendum velit dui. Morbi dignissim tortor
              ac nunc accumsan vulputate. Donec non enim odio.
            </v-card-text>
            <img v-for="(pic,i) in pics" :src="pic" :key="i">
          </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://www.theoryre.com/wp-content/uploads/2016/11/puyallup.jpg',
      actvts: ['Attractions', 'Events', 'Hiking', 'Restaurants', 'Night Life', 'Shopping', 'Cafes'],
      ad: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WgGYmxug5AyMAbM_idADlwMmbojHx_Xh8Lv0ObipYBQHZK-gQQ',
      pics: [
        'http://www.puyallupsda.org/images/header_logo.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH75vIIQomB0OFjSwRNUmFeXHu082Jf3PRl2CBmdVuElCzMdC1',
      ],
    };
  },
};
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    height: 3000px;
  }
  .hover {
    margin-top: -100px;
  }
  .v-parallax__content{
    background-position: center top;
  }
</style>
