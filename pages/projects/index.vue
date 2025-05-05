<template>
  <CommonLoader />
  <CommonNavbar />
  <CommonMenu />
  <PortfolioCarouselSlider />
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Portfolio `,
  bodyAttrs: {
    class: 'main-bg'
  }
});
</script>