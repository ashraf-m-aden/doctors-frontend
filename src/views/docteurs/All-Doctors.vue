<template>
  <div class="pd-top-120 pd-bottom-120">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <b-list-group>
            <b-list-group-item class=" list header">
              <feather type="filter" size="18"></feather>
              Filtre
            </b-list-group-item>
            <b-list-group-item class="list" v-b-toggle="'titre'">
              <div class="sub">
                <feather type="award" size="15"></feather>
                <span class="ml-5">Titre</span>
              </div>
              <!-- Element to collapse -->
              <b-collapse id="titre" class="colapse">
                <ul>
                  <li v-for="(item, index) in 4" :key="index">Item</li>
                </ul>
              </b-collapse>
            </b-list-group-item>

            <b-list-group-item class="list" v-b-toggle="'specialite'">
              <div class="sub">
                <feather type="activity" size="15"></feather>
                <span class="ml-5">Spécialités</span>
              </div>
              <!-- Element to collapse -->
              <b-collapse id="specialite" class="colapse">
                <ul>
                  <li v-for="(item, index) in 4" :key="index">Item</li>
                </ul>
              </b-collapse>
            </b-list-group-item>

            <b-list-group-item class="list" v-b-toggle="'genre'">
              <div class="sub">
                <feather type="user" size="15"></feather>
                <span class="ml-5">Genre</span>
              </div>
              <!-- Element to collapse -->
              <b-collapse id="genre" class="colapse">
                <ul>
                  <li>Homme</li>
                  <li>Femme</li>
                </ul>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item class="list" v-b-toggle="'cnss'">
              <div class="sub">
                <feather type="credit-card" size="15"></feather>
                <span class="ml-5">CNSS</span>
              </div>
              <!-- Element to collapse -->
              <b-collapse id="cnss" class="colapse">
                <ul>
                  <li>Oui</li>
                  <li>Non</li>
                </ul>
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div v-if="loading" class="col-12 col-md-9 loading">
          <feather
            type="loader"
            animation="spin"
            size="55"
            animation-speed="slow"
          ></feather>
        </div>
        <div v-else class="col-12 col-md-9 text-center">
          <vue-paginate-al
            :totalPage="totalpage"
            @btnClick="goToFunction"
            nextText=">"
            prevText="<"
          ></vue-paginate-al>
          <div class="row">
            <div
              class="col-12 col-md-6"
              v-for="(doc, index) in pagDoctors"
              :key="index"
              @click="check()"
            >
              <div class="doc">
                <div class="row">
                  <div class="col-4">
                    <div class="image">
                      <img src="../../assets/img/agent/12.png" alt="" />
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="info">
                      <h5>{{ doc.name }} {{ index }}</h5>
                      <h6>{{ doc.position }}</h6>
                      <div class="spe">
                        <span
                          v-for="(spe, i) in doc.specialities"
                          :key="i"
                          class="spe-item"
                          >{{ spe.spe }}</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <ul class="list-group">
                      <li class="list-group-item info-list text-center">
                        <b-form-rating
                          no-border
                          inline
                          v-model="doc.ratings"
                          variant="danger"
                          class="mb-2"
                        ></b-form-rating>
                      </li>
                      <li class="list-group-item info-list">
                        Consultation: {{ doc.fees }} fDj
                      </li>

                      <li class="list-group-item info-list">
                        Voir la disponibilité
                        <feather type="calendar" size="14"></feather>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      size: 5,
      doctors: [
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        },
        {
          name: 'Ayman Said Salem',
          position: 'Docteur medecine generale',
          specialities: [
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' },
            { spe: 'specialite' }
          ],
          ratings: 4,
          fees: 500
        }
      ],
      pagDoctors: []
    }
  },
  methods: {
    check () {
      this.$router.push('/docteur')
    },
    goToFunction (n) {
      this.loading = true
      this.pagDoctors = []
      let start = 0
      if (n > 1) {
        start = (n - 1) * this.size
      }
      for (let index = start; index < start + this.size; index++) {
        if (this.doctors[index]) {
          this.pagDoctors.push(this.doctors[index])
        }
      }
      this.loading = false
    }
  },
  computed: {
    totalpage () {
      const x = Math.round(this.doctors.length / this.size)
      return x + 1
    }
  },
  mounted () {
    setTimeout(() => {
      this.goToFunction(1)
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #338bf4;
  color: white;
}
.list {
  cursor: pointer;
}
.colapse {
  transition: all 1s;
  font-size: 0.8rem;
  margin-top: 1rem;
}
.info-list {
  border: none;
  padding-bottom: 0;
  padding-top: 0;
  text-align: left;
}
.sub {
  display: flex;
  align-items: center;
  color: #338bf4;
}
.loading {
  text-align: center;
  border: solid 1px black;
  padding-top: 5rem;
}
.doc {
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 1s all;
  &:hover{
    transform: scale(1.1);
    border-top-right-radius: 30px;
    border-bottom-left-radius: 10px;

    .image{
      transform: scale(.9);
    }
  }
}
.image {
  height: 120px;
  width: 120px;
  transition: 1s all;
}
.info {
  text-align: left;
}
.col-8 {
  padding-left: 0;
}
.doc {
  text-align: center;
  border: solid 1px black;
}
.spe {
  display: flex;
  flex-wrap: wrap;
  &-item {
    border: 1px solid #283453;
    line-height: 30px;
    border-radius: 30px;
    transition: all 0.3s ease-in;
    font-size: 0.6rem;
    padding: 0 0.2rem;
    margin: 0 0.2rem;
  }
  &-item:hover {
    background: var(--main-color);
    color: #ffffff;
    border: 1px solid var(--main-color);
  }
}
</style>
