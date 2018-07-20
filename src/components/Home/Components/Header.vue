<template>
  <div>
    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      right
      clipped
      disable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="white"
      light
      fixed
      absolute>
      <router-link :to="{ name: 'home' }">
        <img src="https://puyallupsumnerchamber.com/wp-content/uploads/2018/01/Chamber-Logo.png" height="60px">
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Visitors</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Directory</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Members</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">The Chamber</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Relocating</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Events</v-btn>
        <v-btn flat active-class="active" :to="{ name: 'visitors' }">Join Today!</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawerRight: false,
    }
  },
};
</script>

<style scoped lang="scss">
  .v-toolbar__items {
    font-weight: 500;
    a.active {
      color: #0076C0;
      border-bottom: 1px solid #0076C0;
    }
  }
</style>
