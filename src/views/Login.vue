<template>
    <!-- signin-page-Start -->
    <div class="signin-page-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7">
            <form class="signin-inner border">
              <div class="row">
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="Email" />
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="password" placeholder="Password" />
                  </label>
                </div>
                <div class="col-12 mb-4 text-center">
                  <button class="btn btn-base w-50">Se connecter</button>
                </div>
                <div class="col-12 mb-4">
                  <router-link to="/inscription"
                    ><strong>S'inscrire</strong></router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- signin-page-end -->
</template>

<style lang="scss" scoped>
.signin-page-area {
    background: url("../assets/img/banner/banner1.jpg") !important;

}
.signin-inner {
background: rgba($color: #ffffff, $alpha: .8);
}
.btn-base {
  transition: 1s all;
  background: #2675db;
      color: white;
}
</style>
