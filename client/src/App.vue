<template>
  <v-app>
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor:pointer">VueShare</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search Posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-icon left class="hidden-sm-only">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container class="mt-4">
      <transition name="fade">
        <router-view/>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      sideNav: false
    };
  },
  methods: {},
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}
</style>

