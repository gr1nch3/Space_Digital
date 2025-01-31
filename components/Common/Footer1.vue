<template>
  <footer :class="{ 'sub-bg': subBg }">
    <div class="footer-container">
      <div class="container pb-80 pt-80 ontop">
        <div class="row">
          <div class="col-lg-6">
            <div class="eml">
              <h6 class="sub-title opacity-8">
                we would love to hear from you.
              </h6>
              <h2 class="fz-60">
                <a href="mailto:hello@spaceedigital.com">hello@spaceedigital.com</a>
              </h2>
            </div>
          </div>
        </div>
        <div class="row mt-80">
          <div class="col-lg-3">
            <div class="logo">
              <img src="/assets/imgs/logo-light.png" alt="logo" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="column">
              <h6 class="sub-title mb-30">Social Media</h6>
              <ul class="rest">
                <li class="hover-this cursor-pointer">
                  <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/space.digitals" class="hover-ani">Facebook</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a  target="_blank" rel="noopener noreferrer"  href="https://www.x.com/spaceedigital" class="hover-ani">twitter</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a  target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/company/spaceedigital" class="hover-ani">LinkedIn</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/spacee.digital" class="hover-ani">Instagram</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="column">
              <h6 class="sub-title mb-30">Our Office :</h6>
              <p>Old Road Monrovia, Liberia</p>
              <h5 class="mt-15">
                <a href="tel:+231 881 791 949">+231 881 791 949</a>
              </h5>
            </div>
          </div>


        </div>
      </div>
      <div class="container bord pt-30 pb-30 bord-thin-top">
        <div class="row">
          <div class="col-lg-6">
            <div class="links">
              <ul class="rest">
                <li>
                  <a href="/about" class="animsition-link">FAQ</a>
                </li>
                <li>
                  <a href="/about" class="animsition-link">Careers</a>
                </li>
                <li>
                  <a href="/contact" class="animsition-link">Contact Us</a>
                </li>

                <li>
                  <a href="/pricing" class="animsition-link">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright d-flex">
              <div class="ml-auto">
                <p class="fz-13">
                  &copy; <span id="currentyear">{{ currentYear }}</span>  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>


import { onMounted, onBeforeUnmount } from "vue";

//get current year
const currentYear = ref(new Date().getFullYear());

const { subBg } = defineProps({
  subBg: Boolean,
});

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.set(".footer-container", { yPercent: -50 });
    const uncover = gsap.timeline({ paused: true });
    uncover.to(".footer-container", { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: "main",
      start: "bottom bottom",
      end: "+=50%",
      animation: uncover,
      scrub: true,
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
