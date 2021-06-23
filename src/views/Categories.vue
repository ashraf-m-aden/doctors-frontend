<template>
  <div class="">
    <!-- breadcrumb start -->
    <div class="breadcrumb-area bg-overlay-2">
      <div class="breadcrumb-inner">
        <div class="section-title text-center">
          <h2 class="page-title">Catégories</h2>
        </div>
      </div>
    </div>
    <!-- breadcrumb end -->
    <div class="container">
      <ul class="list pd-top-120 row">
        <b-media
          tag="li"
          v-for="(item, index) in 7"
          :key="index"
          class="media col-md-4"
          v-b-toggle="'#' + index"
        >
          <div class="d-flex">
            <b-img
              blank
              blank-color="#abc"
              width="64"
              alt="placeholder"
            ></b-img>
            <h6 class="mt-0 ml-2 mb-1">List-based media object</h6>
          </div>
          <b-collapse :id="'#' + index" class="mt-2 colapse">
           <ul>
             <li>
               <router-link to="/docteurs">Tous voir</router-link>
             </li>
             <li v-for="(item, index) in 4" :key="index">
               Specialité
             </li>
           </ul>
          </b-collapse>
        </b-media>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media {
  margin-bottom: 2rem;
}
.breadcrumb-area {
  background: url("../assets/img/banner/banner1.jpg");
}
.colapse{
  transition: all 1s;
}
</style>
