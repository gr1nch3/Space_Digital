<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <AboutHeader />
        <AboutIntro />
        <CoreValues />
        <AboutVideo />
        <AboutTeam />
        <AboutTestimonials />
      </main>
      <CommonFooter1 />
    </div>
  </div>
</template>

<script setup>
import CoreValues from '~/components/About/CoreValues.vue';

//= Page Head
useHead({
  titleTemplate: `%s - About`,
  bodyAttrs: {
    class: 'main-bg'
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>
