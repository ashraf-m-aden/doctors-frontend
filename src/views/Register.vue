<template>
  <div>

    <!-- signup-page-Start -->
    <div class="signup-page-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7">
            <form class="signin-inner">
              <div class="row">
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="Nom complet" />
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="Email" />
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="Mot de passe" />
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="Confirmer le mot de passe" />
                  </label>
                </div>
                <div class="col-12 mb-4 text-center">
                  <button class="btn btn-base w-50">S'inscrire</button>
                </div>
                <div class="col-12">
                  <router-link to="/connection"><strong>Se connecter</strong></router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- signup-page-end -->
  </div>
</template>
<style lang="scss" scoped>
.signin-inner {
background: rgba($color: #ffffff, $alpha: .8);

}
.signup-page-area {
    background: url("../assets/img/banner/banner1.jpg") !important;

}
.btn-base {
  transition: 1s all;
  background: #2675db;
      color: white;
}
</style>
