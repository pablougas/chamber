<template>
  <v-layout id="sub-nav" wrap>
    <div v-for="(link,index) in categories" :key="index" class="category">
      <v-btn fab
             small
             :color="link.color"
             dark
             depressed
             class="mr-3">
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <span>{{ link.text }}</span>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['categories'],
  data() {
    return {}
  },
};
</script>

<style scoped lang="scss">
  #sub-nav {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    color: #f1f1f1;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .category {
      cursor: pointer;
      font-size: 18px;
      font-weight: 800;
      padding: 8px;
      width: auto;
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      flex: 1;
      display: flex;
      justify-content: center;

      span {
        margin-top: 14px;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  }
</style>
