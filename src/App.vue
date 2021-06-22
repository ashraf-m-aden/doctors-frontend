<template>
  <div id="app">
    <HeaderOne v-if="currentUrl == '/'" />
    <HeaderTwo v-else />
    <router-view />
    <FooterOne />
    <!-- back to top area start -->
    <!-- back to top area end -->
  </div>
</template>
<script>
import HeaderOne from '@/components/HeaderOne.vue'
import HeaderTwo from '@/components/HeaderTwo.vue'
import FooterOne from '@/components/FooterOne.vue'
export default {
  data () {
    return {
      currentUrl: ''
    }
  },
  components: {
    HeaderOne,
    HeaderTwo,
    FooterOne
  },
  watch: {
    '$route' (pathUrl) {
      this.currentUrl = pathUrl.path
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  mounted () {
    this.currentUrl = window.location.pathname
  }
}
</script>

<style lang="scss">
@import "./assets/css/vendor.css";
@import "./assets/css/style.css";
@import "./assets/css/responsive.css";
</style>
