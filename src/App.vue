<template>
  <div id="app">
    <HeaderOne />
    <router-view />
  </div>
</template>
<script>
import HeaderOne from '@/components/HeaderOne.vue'
export default {
  components: {
    HeaderOne
  }
}
</script>

<style lang="scss">
@import "./assets/css/vendor.css";
@import "./assets/css/style.css";
@import "./assets/css/responsive.css";
</style>
