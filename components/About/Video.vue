<template>
  <div class="vid-sec sub-bg pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="vid-intro">
            <div class="video-container">
              <img src="/assets/imgs/b8.jpg" alt="" />
              <!-- <video autoplay loop muted>
                <source src="/assets/vid/vid-startup.mp4" type="video/mp4" />
              </video> -->

              <div
                style="margin-top: 50px; padding-top: 30px"
                class="justify-center container"
              >
                <h5
                  
                  class="title"
                >
                  Approach That Works
                </h5>
                <p
                  style="margin-top: 17px"
                  class="small-para  opacity-8 mt-5"
                >
                  We are humans creating remarkable digital <br />products and
                  brands for other humans. We care <br />
                  deeply about the wellbeing of our team.
                </p>

                <div
                  style="margin-top: 40px"
                  class="d-flex align-items-center row grid-wrapper"
                >
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/up.svg" alt="icon" class="img-size">
                    <p class="small-para">Empathize</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/quality.svg" alt="icon" class="img-size">
                    <p class="small-para" >Define</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/light.svg" alt="icon" class="img-size">
                    <p class="small-para" >Idetate</p>
                  </div>
                </div>

                <div style="margin-top: 20px;" class="row grid-wrapper">
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/award.svg" alt="icon" class="img-size">
                    <p class="small-para" >Prototype</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/light.svg" alt="icon" class="img-size">
                    <p class="small-para" >Test</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="/public/assets/imgs/serv-icons/loop.svg" alt="icon" class="img-size">
                    <p class="small-para" >Repeat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="brands mt-70">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="brand-items">
              <div class="row">
                <div
                  class="col-lg-3 col-md-4 col-6 item"
                  v-for="item in data"
                  :key="item"
                >
                  <div class="img">
                    <img :src="item" alt="" />
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

<style src="/components/style/about.css" ></style>

<script setup>
//= Static Data
import data from "@/data/About/brands.json";
</script>
