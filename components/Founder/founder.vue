<template>
  <section class="testimonials section-padding">
    <div class="container">

      <div class="row">
        <div class="col-lg-9">
          <div class="testim">
            <Swiper v-if="data.length" id="content-carousel-container-unq-testim" v-bind="swiperOptions">
              <template v-for="item in data" :key="item.id">
                <SwiperSlide>
                  <div class="container item">
                    <div class="col-md-2">
                        <div style="opacity: 0.5;" class="quote-icon icon-img-80 pt-10">
                          <img size="5" src="/assets/imgs/svg-assets/quote.png" alt="" />
                        </div>
                      </div>
                      <br>
                    <div class="row">
                      
                      <div class="col-md-8">
                        <div class="cont">
                          <h4 style="font-family: Plus Jakarta Sans, serif; line-height: 45px; font-size: 30px; font-weight: 100;"
                            class="fz-2">{{ item.quote }}</h4>
                          <div class="info mt-30">
                           
                            <h5 style="font-family: Plus Jakarta Sans, serif;  font-size: 17px; font-weight: 800;"
                              class="text- ls1">{{ item.author }} <span><a href="https://www.linkedin.com/in/harolddd-jonesss/" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a></span></h5> 

                            <span style="color: #00adee; font-weight: bold; font-size: 9.5px;  letter-spacing: 8px;"
                              class="sub-title ">{{ item.position }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </template>
            </Swiper>
          </div>
        </div>
        <div class="col-lg-3 d-flex align-items-center justify-content-center">
          <div class="image-section">
            <div class="image-container">
              <img style="border-radius: 110px;" src="public/assets/imgs/main2.jpg" alt="Profile Image" class="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
//= Common Scripts
import removeSlashFromPagination from '@/common/removeSlashFromPagination';
//= Static Data
import data from '@/data/Founder/founder.json';




</script>