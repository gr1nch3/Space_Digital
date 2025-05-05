<template>
  <div class="works thecontainer ontop">
    <div v-for="item in images" :key="item.index" class="panel">
      <div class="item">
        <div class="img">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  //= Static Data
  images: {
    type: Array,
    default: () => []
  }
});

import { onMounted } from 'vue';

onMounted(() => {
  if (window.innerWidth > 991) {
    let sections = gsap.utils.toArray(".panel");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".thecontainer",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
      }
    });
  }

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  const allTriggers = ScrollTrigger.getAll();
  if (window.innerWidth < 991 && allTriggers.length || window.innerWidth > 991 && !allTriggers.length) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
}
</script>
