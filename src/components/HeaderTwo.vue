<template>
  <div class="body-bg">
    <!-- search popup start-->
    <div class="body-overlay" id="body-overlay"></div>
    <div class="td-search-popup" id="td-search-popup">
      <form action="index.html" class="search-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search....." />
        </div>
        <button type="submit" class="submit-btn">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
    <!-- search popup end-->

    <!-- navbar start -->
    <div class="navbar-area navbar-area-1">
      <nav class="navbar navbar-expand-lg">
        <div class="container nav-container">
          <div class="responsive-mobile-menu">
            <button
              class="menu toggle-btn d-block d-lg-none"
              data-target="#dkt_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-left"></span>
              <span class="icon-right"></span>
            </button>
          </div>
          <div class="logo">
            <router-link to="/"
              ><img src="../assets/img/logotrans.png" class="logo-img" alt="img"
            /></router-link>
          </div>
          <div class="nav-right-part nav-right-part-mobile">
            <ul>
              <li>
                <a class="search" href="#"><i class="fa fa-search"></i></a>
              </li>
              <li>
                <a class="btn btn-base " href="add-property.html"
                  ><span class="btn-icon"><i class="fa fa-plus"></i></span>
                  <span class="btn-text">SUBMIT PROPERTY</span></a
                >
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="dkt_main_menu">
            <ul class="navbar-nav menu-open text-center">
              <li class="menu-item-has-children current-menu-item">
                <a href="#">Blog</a>

              </li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="nav-right-part nav-right-part-desktop">
            <ul>
              <li>
                <a class="search" href="#"><i class="fa fa-search"></i></a>
              </li>
              <li><router-link to="/connection" class="btn ">Connection</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- navbar end -->
  </div>
</template>
<style scoped lang="scss">
.btn {
  text-transform: uppercase;
  transition: 1s all;
  &:hover {
    background: white;
  }
}
</style>
