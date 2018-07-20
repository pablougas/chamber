<template>
  <div class="wrapper">
    <v-content>
      <v-layout wrap>
        <v-flex xs12 class="mb-2">
          <v-label>Search The City</v-label>
        </v-flex>
        <v-flex xs12 sm9 d-flex>
          <v-select
            :items="categories"
            label="search"
            dark
            outline
            clearable
            append-icon="search"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn
            class="mt-0 ml-2"
            x-large
            dark
            color="light-green"
            block>Search
          </v-btn>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['categories'],
  data() {
    return {}
  }
};
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: rgba(0,0,0, .3);
    position: absolute;
    bottom: 200px;
    min-height: 150px;
    height: auto;
    min-width: 50%;
    max-width: 80%;
    width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;

    label {
      color: white;
      font-size: 22px;
      font-weight: 800;
    }

    button {
      height: 60px;
      background-color: #c1d82f;
      font-weight: 900;
    }
  }
</style>
