<template>
  <section class="works thecontainer ontop sub-bg">
    <div v-for="item in page" :key="item.path" class="panel">
      <div class="item">
        <div class="img">
          <img :src="item.headerImage" alt="" />
        </div>
        <div class="cont d-flex align-items-center">
          <div>
            <span>{{ item.category }}</span>
            <h5>{{ item.title }}</h5>
          </div>
          <!-- <div class="ml-auto">
            <h6>{{ item.year }}</h6>
          </div> -->
        </div>
        <a :href="item.path" class="link-overlay animsition-link"></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
// Import the data from the JSON file
const route = useRoute();
const {data:page} = await useAsyncData(route.path, () => {
  return queryCollection('projects').limit(6).order('startDate', 'DESC').all();
});
const handleResize = () => {
  const allTriggers = ScrollTrigger.getAll();
  if ((window.innerWidth < 991 && allTriggers.length) || (window.innerWidth > 991 && !allTriggers.length)) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
};

// Register the ScrollTrigger plugin and animate on component mount
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

// Remove the resize event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
