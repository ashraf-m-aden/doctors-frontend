<template>
  <div class="pd-top-120 pd-bottom-120">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="doc col-12">
              <div class="row">
                <div class="col-4">
                  <div class="image">
                    <img src="../../assets/img/agent/12.png" alt="" />
                  </div>
                </div>
                <div class="col-8">
                  <div class="info">
                    <h5>Ashraf Mohamed Aden</h5>
                    <h6>Etudiant 5eme année</h6>
                    <small class="text-muted">Ecole de medecine</small>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis voluptatibus eius necessitatibus laudantium.
                    </p>
                  </div>
                </div>
                <div class="col">
                  <ul class="list-group">
                    <li class="list-group-item info-list text-center">
                      <b-form-rating
                        no-border
                        inline
                        value="5"
                        variant="danger"
                      ></b-form-rating>
                    </li>
                    <li class="list-group-item info-list card">
                      <div class="details">
                        <h6 class="name">Barwaqo Houssein</h6>
                        <p>
                          “ Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque facere odit, molestias suscipit repellat
                          optio culpa in laborum odio reiciendis facilis cum
                          doloribus ipsa pariatur a quidem? Tempora, et ad. ’’
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 about">
              <h5 class="mb-0 ">Etudiant en medecine 5eme anneé</h5>
              <small class=" mt-0 text-muted">Ecole de medecine</small>
              <div class="w-50 d-flex justify-content-between flex-wrap">
                <h5>Services:</h5>
                <span>khbk</span><span>khbk</span><span>khbk</span>
              </div>
            </div>
            <div class="col-12 reviews">
              <h3>Notes des clients</h3>
              <ul class="list-group">
                <li class="list-group-item review">
                  <h6 class="name">Barwaqo Houssein</h6>
                  <div class="rating-inner">
                    <b-form-rating
                      no-border
                      inline
                      value="4"
                      variant="danger"
                      class="mb-2"
                    ></b-form-rating>
                  </div>
                  <p>
                    “ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque facere odit, molestias suscipit repellat optio culpa
                    in laborum odio reiciendis facilis cum doloribus ipsa
                    pariatur a quidem? Tempora, et ad. ’’
                  </p>
                </li>
                <li class="list-group-item review">
                  <h6 class="name">Barwaqo Houssein</h6>
                  <div class="rating-inner">
                    <b-form-rating
                      no-border
                      inline
                      value="4"
                      variant="danger"
                      class="mb-2"
                    ></b-form-rating>
                  </div>
                  <p>
                    “ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque facere odit, molestias suscipit repellat optio culpa
                    in laborum odio reiciendis facilis cum doloribus ipsa
                    pariatur a quidem? Tempora, et ad. ’’
                  </p>
                </li>
              </ul>
              <vue-paginate-al
                :totalPage="totalpage"
                @btnClick="goToFunction"
                nextText=">"
                prevText="<"
              ></vue-paginate-al>
            </div>
          </div>
        </div>
        <div class="col-6">
          Consultation
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 5
    }
  },
  methods: {
    check () {
      this.$router.push('/docteur')
    },
    goToFunction (n) {
    }
  },
  computed: {
    totalpage () {
      return 10
    }
  }
}
</script>
<style lang="scss" scoped>
.info-list {
  border: none;
  padding-bottom: 0;
  padding-top: 0;
  text-align: left;
}

.doc {
  margin-bottom: 2rem;
}
.image {
  height: 160px;
  width: 160px;
  transition: 1s all;
}
.info {
  text-align: left;
}
.doc {
  text-align: center;
  padding-top: 2rem;
}
.details {
  background: #338bf4;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0.8rem;
  text-align: center;
  padding: 0 2rem;
  p,
  h6 {
    color: white !important;
  }
}
.about {
  padding-top: 1rem;
}
.reviews {
  padding-top: 2rem;
}
.review {
  border: solid 1px rgba(163, 156, 156, 0.603);
  padding: 0 0.5rem;
}
</style>
