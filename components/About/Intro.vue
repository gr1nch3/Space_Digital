<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="text">
            <span class="sub-title mb-15 opacity-8">- Who We Are?</span>
            <div class="text-reval">
              <h2 class="fz-50 text-u mb-30">
                <span class="text">We are a creative studio with focus</span>
                <span class="text">on set design, illustration and</span>
                <span class="text"> motion design.</span>
              </h2>
            </div>
            <p>
              We create brand identities, digital experiences, and print materials that communicate clearly,
              achieve marketing goals, and look fantastic. Urban design draws together the many strands of
              place-making, environmental stewardship.
            </p>
          </div>
        </div>
      </div>



      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row mt-80">
            <div class="col-md-4 sm-mb30">
              <h3 class="f-bold text-u mt-5">Creative</h3><br>
              <ul class="list rest">
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Art Direction</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Visual & Brand Identity Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Product Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Wireframe & Prototyping</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>UX & UI</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Social Media Design</li>
                <li class="fz-18 mb-15 opacity-50"><span class="mr-10">+</span>Content Studio (Soon) </li>
              </ul>
            </div>


            <div class="col-md-4 sm-mb30">
              <h3 class="f-bold text-u mt-5">Engineering</h3><br>
              <ul class="list rest">
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Front-End Development</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Back-End Development</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Application Development</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>CMS Implementation</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>Technical Architecture</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span>AR & VR 3D development</li>
                <li class="fz-18 mb-15 opacity-50"><span class="mr-10">+</span>Venture Studio (Soon)</li>
              </ul>
            </div>

          </div>

          <div class="row numbers mt-80">
            <div class="col-lg-5">
              <div class="item md-mb50">
                <div class="d-flex align-items-center">
                  <div>
                    <h5 class=" text-u">Mission</h5> <br>
                    <div class="row">
                      <p class="small-text opacity-8">To redefine digital excellence by merging human-centered design
                        with cutting-edge
                        technology to create brands and products.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="item md-mb50">
                <div class="d-flex align-items-center">
                  <div>
                    <h5 class="text-u">Vision</h5> <br>
                    <div class="row">
                      <p class="small-text opacity-8">Creating durable relationships through human-centered design and
                        cutting-edge
                        technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            
            <div class="col-12"><br>
              <h5 class="text-u">OUR APPROACH</h5><br>
              <p class="small-text opacity-8"> We do not just build technologies, we build blooming relationships. We take the time 
to understand our clients and their needs which allows us to build solutions that are 
valuable and meaningful.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.small-text {
  font-size: 15px;

}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
