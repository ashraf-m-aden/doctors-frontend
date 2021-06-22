<template>
  <div>
    <!-- product area start -->
    <div class="product-area pd-top-118 pd-bottom-90">
      <div class="container">
        <div class="section-title text-center">
          <h6>Votre personel soignant vous attend</h6>
          <h2>Les categories frequents</h2>
        </div>
        <cat-carousel
          :items="items"
          :item-per-page="itemperpage"
          :indicators-config="{
            activeColor: '#000',
            size: 10,
            color: '#d1d1d1',
            hideIndicators: false
          }"
        >
          <template slot="item" slot-scope="{ data }">
            <div class="item ">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/img/product/cat-1.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text">
                    {{ data.name }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </cat-carousel>

        <div class="row"></div>
      </div>
    </div>
    <!-- product area end -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'premier' },
        { name: 'deuxiemme' },
        { name: 'sagita' },
        { name: 'sagita' },
        { name: 'sagita' },
        { name: 'sagita' },
        { name: 'sagita' }
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
    }
  }
}
</script>
