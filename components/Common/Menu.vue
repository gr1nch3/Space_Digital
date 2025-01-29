<template>
  <div class="hamenu valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/" class="link dmenu"><span class="nm">01.</span>Home </NuxtLink>
                </div>
             
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/about" class="link animsition-link" @click="closeMenu"><span class="nm">02.</span>About</a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <!-- <span class="link dmenu" @click="handleOpenDMenu"><span class="nm">03.</span>Portfolio </span> -->
                  <NuxtLink to="/carousel-slider" class="link dmenu"><span class="nm">03.</span>Portfolio </NuxtLink>
                </div>
                <div class="sub-menu">
              
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="rest">
                    
                        <li>
                          <div class="o-hidden">
                            <a href="/carousel-slider" class="sub-link animsition-link" @click="closeMenu">Carousel
                              Slider</a>
                          </div>
                        </li>
                     
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="rest">
                        <li>
                          <div class="o-hidden">
                            <a href="/portfolio-fixed-text" class="sub-link animsition-link" @click="closeMenu">Creative
                              Portfolio</a>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/blog" class="link animsition-link" @click="closeMenu"><span class="nm">04.</span>Stories</a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/contact" class="link animsition-link" @click="closeMenu"><span
                      class="nm">05.</span>Contact</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 valign">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="text-u fw-600 mb-20">Location</h6>
              <p class="fw-400 fz-18">Old Road Monrovia, Liberia</p>
            </div>
            <div class="item mb-50">
              <h6 class="text-u fw-600 mb-20">How to Connect</h6>
              <a href="tel:+231 881 791 949">+231 881 791 949</a><br>
              <a href="mailto:hello@spaceedigital.com">hello@spaceedigital.com</a>
            </div>
            <div class="bottom">
              <h6 class="text-u fw-600 mb-20">Follow Us</h6>
              <ul class="rest social-text d-flex fz-13">
                <li class="mr-20">
                  <a target="_blank" ref="noopener noreferrer" href="https://www.facebook.com/space.digitals" class="hover-this"><span class="hover-ani">Facebook</span></a>
                </li>
                <li class="mr-20">
                  <a target="_blank" ref="noopener noreferrer" href="https://www.x.com/spaceedigital" class="hover-this"><span class="hover-ani">Twitter</span></a>
                </li>
                <li class="mr-20">
                  <a target="_blank" ref="noopener noreferrer" href="https://www.linkedin.com/company/spaceedigital" class="hover-this"><span class="hover-ani">LinkedIn</span></a>
                </li>
                <li>
                  <a target="_blank" ref="noopener noreferrer" href="https://www.instagram.com/spacee.digital" class="hover-this"><span class="hover-ani">Instagram</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//navigation


const closeMenu = () => {
  document.querySelector('.hamenu').classList.remove("open");
};

const handleMouseEnter = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
  event.currentTarget.style.opacity = "1";
};

const handleMouseLeave = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
};

// const handleOpenDMenu = (event) => {
//   document.querySelector(".main-menu").classList.add("gosub");
//   event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
// };

const handleCloseDMenu = () => {
  document.querySelector(".main-menu").classList.remove("gosub");
  document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
};
</script>
