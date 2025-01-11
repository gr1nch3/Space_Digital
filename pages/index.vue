<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <div class="main-box main-bg ontop">
          <LandingHeader />
          <LandingAbout />

          <LandingWho />

          <LandingWorks />
          <LandingMarquee />
          <LandingBrands />
          <LandingAccordions />
          <LandingBlog />
          <AboutTestimonials />
        </div>
        <LandingContact />
      </main>
      <CommonFooter1 />
    </div>
  </div>
</template>

<script setup>
import AboutTestimonials from '~/components/About/Testimonials.vue';
 
//= Page Head
useHead({
  titleTemplate: `%s - Award Winning Software & Design Agency `,
  bodyAttrs: {
    class: 'Space Digital'
  },
  link: [
    {
      rel: "stylesheet",
      href: '/assets/css/base.css'
    }
  ],
  script: [
    { src: "/assets/js/TweenMax.min.js" },
    { src: "/assets/js/charming.min.js" },
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>
