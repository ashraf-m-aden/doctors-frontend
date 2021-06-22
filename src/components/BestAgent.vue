<template>
  <!-- agent area start -->
  <div class="agent-area text-center pd-top-118 pd-bottom-90">
    <div class="container">
      <div class="section-title text-center">
        <h6>Rencontrez nos personels soyants</h6>
        <h2>Les plus étoilés</h2>
      </div>
      <cat-carousel
        :items="items"
        :item-per-page="itemperpage"
        :indicators-config="{
          activeColor: '#000',
          size: 10,
          color: '#d1d1d1',
          hideIndicators: hideIndicators
        }"
      >
        <template slot="item" slot-scope="{ data }">
          <div class="item ">
            <div class="single-agent-wrap">
              <div class="thumb">
                <img src="../assets/img/agent/1.png" alt="img" />
              </div>
              <div class="details">
                <h4>{{ data.name }}</h4>
                <h6>{{ data.position }}</h6>
                <b-form-rating
                  no-border
                  inline
                  v-model="data.rating"
                  variant="danger"
                  class="mb-2"
                ></b-form-rating>
              </div>
            </div>
          </div>
        </template>
      </cat-carousel>
    </div>
  </div>
  <!-- agent area end -->
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'Ayman Said Salem', position: 'Docteur', rating: '4' },
        { name: 'Ayman Said Salem', position: 'Docteur', rating: '4' },
        { name: 'Ayman Said Salem', position: 'Docteur', rating: '4' },
        { name: 'Ayman Said Salem', position: 'Docteur', rating: '4' }
      ]
    }
  },
  computed: {
    itemperpage () {
      if (window.innerWidth < 450) {
        return 1
      }
      if (window.innerWidth < 769) {
        return 3
      } else {
        return 4
      }
    },
    hideIndicators () {
      if (window.innerWidth < 450) {
        return false
      }
      if (window.innerWidth < 769) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
