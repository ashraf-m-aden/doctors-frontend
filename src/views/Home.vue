<template>
  <div class="home">
    <!-- preloader area start -->
    <div class="preloader" id="preloader" v-show="loading">
      <div class="preloader-inner">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div>
    <!-- preloader area end -->
    <Banner />
    <Services />
    <Categories />
    <Testimony />
    <BestAgent />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Services from '@/components/Services.vue'
import Categories from '@/components/Categories.vue'
import Testimony from '@/components/Testimony.vue'
import BestAgent from '@/components/BestAgent.vue'
export default {
  name: 'Home',
  data () {
    return {
      loading: true
    }
  },
  components: {
    Banner,
    Services,
    Categories,
    Testimony,
    BestAgent
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 0)
  }
}
</script>
