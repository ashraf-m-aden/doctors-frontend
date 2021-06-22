<template>
  <div id="app">
    <HeaderOne />
    <router-view />
    <FooterOne />
  </div>
</template>
<script>
import HeaderOne from '@/components/HeaderOne.vue'
import FooterOne from '@/components/FooterOne.vue'
export default {
  components: {
    HeaderOne,
    FooterOne
  }
}
</script>

<style lang="scss">
@import "./assets/css/vendor.css";
@import "./assets/css/style.css";
@import "./assets/css/responsive.css";
</style>
