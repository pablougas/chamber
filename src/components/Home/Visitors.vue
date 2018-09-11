<template>
  <div>
    <v-container fluid class="pa-0">
      <v-parallax :src="image"></v-parallax>
    </v-container>
    <v-layout justify-space-around row wrap class="mt-4">
      <v-flex xs12 sm4>
        <v-card :class="{'hover mb-5': $vuetify.breakpoint.smAndUp}">
          <h1
            class="blue--text text--lighten-2 display-1 text-xs-center mb-4"
            :class="{'pt-4':$vuetify.breakpoint.mdAndUp, 'pt-3' :$vuetify.breakpoint.smAndDown}">
            Puyallup - Sumner
          </h1>

          <v-card-text :class="{'pa-0':$vuetify.breakpoint.smAndUp}">
            <v-spacer></v-spacer>
            <v-menu
              bottom
              class="align-right"
              origin="center center"
              transition="scale-transition"
              v-if="$vuetify.breakpoint.xsOnly">
              <v-btn
                     slot="activator"
                     flat
                     icon
              >
                <v-icon>menu</v-icon>
              </v-btn>
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
            </v-menu>
            <v-navigation-drawer width="100%" v-else flat>
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
          </v-card-text>

        </v-card>
        <v-card>
          <v-card-text>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
          <v-card class="mt-5" flat color=" grey lighten-5">
            <v-card-text class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras et lacinia arcu,
              nec iaculis libero. Vivamus eu risus nec urna finibus viverra. Etiam lacinia
              imperdiet vestibulum. Donec et ante eget augue maximus fringilla. Nulla facilisi.
              Proin efficitur pharetra condimentum. Quisque bibendum, elit vitae rhoncus faucibus,
              lorem erat interdum leo, a tristique arcu dolor vel nibh. Donec mi mi, faucibus at
              massa non, suscipit elementum erat. Cras bibendum velit dui. Morbi dignissim tortor
              ac nunc accumsan vulputate. Donec non enim odio.
            </v-card-text>
            <v-layout row wrap>
              <v-flex xs6 v-for="(pic,i) in pics" :key="i" class="pa-2">
                <v-img :src="pic" aspect-ratio="1.2"></v-img>
              </v-flex>
            </v-layout>
        </v-card>
        <v-spacer></v-spacer>
        <v-card>
            <v-img src="https://via.placeholder.com/350x150"></v-img>
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH75vIIQomB0OFjSwRNUmFeXHu082Jf3PRl2CBmdVuElCzMdC1',
        'https://beekings.com/wp-content/uploads/2015/08/washington-state-fair.jpg',
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
  .align-right{
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
