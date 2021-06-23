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
              ><img src="../assets/img/logo.png" alt="img"
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
                <a href="#">Home</a>
                <ul class="sub-menu">
                  <li><a href="index.html">Home 01</a></li>
                  <li><a href="index-2.html">Home 02</a></li>
                  <li><a href="index-3.html">Home 03</a></li>
                  <li><a href="index-4.html">Home 04</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children current-menu-item">
                <a href="#">Property</a>
                <ul class="sub-menu">
                  <li><a href="property.html">Property</a></li>
                  <li><a href="property-grid.html">Property Grid</a></li>
                  <li><a href="property-left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="property-details.html">Property Details</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children current-menu-item">
                <a href="#">Pages</a>
                <ul class="sub-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="signin.html">Sign In</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="add-property.html">Add Property</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children current-menu-item">
                <a href="#">Blog</a>
                <ul class="sub-menu">
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                  <li>
                    <a href="blog-details-left-sidebar.html"
                      >Details Left Sidebar</a
                    >
                  </li>
                </ul>
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
