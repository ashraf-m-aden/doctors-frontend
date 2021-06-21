<template>
  <div class="body-bg">
    <!-- search popup start-->
    <div class="body-overlay" id="body-overlay"></div>
    <div class="td-search-popup" id="td-search-popup">
        <form action="index.html" class="search-form">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.....">
            </div>
            <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <!-- search popup end-->

    <!-- navbar start -->
    <div class="navbar-area navbar-area-1">
        <!-- navbar top start -->
        <div class="navbar-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 text-lg-left text-center">
                        <ul>
                            <li>
                                <p><img src="assets/img/icon/location.png" alt="img"> 420 Love Sreet 133/2 flx City</p>
                            </li>
                            <li>
                                <p><img src="assets/img/icon/phone.png" alt="img"> +(06) 017 800 628</p>
                            </li>
                            <li>
                                <p><img src="assets/img/icon/envelope.png" alt="img"> info.contact@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <ul class="topbar-right text-lg-right text-center">
                            <li>
                                <a class="ml-0" href="signup.html">Register</a>
                                <a href="signin.html">Login</a>
                            </li>
                            <li class="social-area">
                                <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                                <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i class="fab fa-skype" aria-hidden="true"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container nav-container">
                <div class="responsive-mobile-menu">
                    <button class="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>
                <div class="logo">
                    <a href="index.html"><img src="assets/img/logo.png" alt="img"></a>
                </div>
                <div class="nav-right-part nav-right-part-mobile">
                    <ul>
                        <li><a class="search" href="#"><i class="fa fa-search"></i></a></li>
                        <li><a class="btn btn-base" href="add-property.html"><span class="btn-icon"><i
                                        class="fa fa-plus"></i></span> <span class="btn-text">SUBMIT PROPERTY</span></a>
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
                                <li><a href="blog-details-left-sidebar.html">Details Left Sidebar</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="nav-right-part nav-right-part-desktop">
                    <ul>
                        <li><a class="search" href="#"><i class="fa fa-search"></i></a></li>
                        <li><a class="btn btn-base" href="add-property.html"><span class="btn-icon"><i
                                        class="fa fa-plus"></i></span> <span class="btn-text">SUBMIT PROPERTY</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- navbar end -->
  </div>
</template>
