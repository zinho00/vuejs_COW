<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
  videoSrc: require('@/assets/home-header.mp4')
};
</script>

<style>
@import "assets/css/base.css";
</style>
