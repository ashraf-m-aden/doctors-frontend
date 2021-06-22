<template>
    <!-- testimonial area start -->
    <div class="testimonial-area pd-top-118 pd-bottom-120 bg-overlay">
      <div class="bg-overlay-wrap">
        <div class="section-title style-white text-center">
          <h2>Ce que disent nos clients</h2>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="single-testimonial-inner style-two text-center">
                      <div class="thumb main-thumb">
                        <img src="../assets/img/testimonial/1.png" alt="img" />
                      </div>
                      <div class="details">
                        <h6 class="name">Barwaqo Houssein</h6>
                        <p>
                          “ Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque facere odit, molestias suscipit repellat
                          optio culpa in laborum odio reiciendis facilis cum
                          doloribus ipsa pariatur a quidem? Tempora, et ad. ’’
                        </p>
                        <div class="rating-inner">
                          <b-form-rating
                            no-border
                            inline
                            value="4"
                            variant="danger"
                            class="mb-2"
                          ></b-form-rating>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="single-testimonial-inner style-two text-center">
                      <div class="thumb main-thumb">
                        <img src="../assets/img/testimonial/4.png" alt="img" />
                      </div>
                      <div class="details">
                        <h6 class="name">Eleyeh Guedid</h6>
                        <p>
                          “ Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptates voluptatibus blanditiis magnam
                          architecto. Et similique vel earum perferendis.
                          Recusandae porro praesentium similique voluptates.
                          Libero quis, molestiae voluptatem laudantium modi et.
                          ’’
                        </p>
                        <div class="rating-inner">
                          <b-form-rating
                            no-border
                            inline
                            value="4"
                            variant="danger"
                            class="mb-2"
                          ></b-form-rating>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div class="testimonial-slider-1 owl-carousel"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- testimonial area end -->
</template>

<style scoped>
.testimonial-area {
  background: url(../assets/img/banner/banner1.jpg);
}
</style>
