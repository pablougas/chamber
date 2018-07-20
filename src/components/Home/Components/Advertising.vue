<template>
  <div class="wrapper">
    <v-container>
      <v-layout justify-space-around align-content-center>
        <v-flex shrink justify-center>
          <img :src="ad.photoUrl" :alt="ad.description" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Advertising',
  props: ['ad'],
};
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: #ECEFF1;
    min-height: 100px;
    max-height: 150px;
    width: 100%;
    overflow: hidden;
  }
</style>
