<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  data() {
    return {};
  },
  components: { AppHeader, AppFooter, HomePage },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "../src/general.scss" as *;
</style>
