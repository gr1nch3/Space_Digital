<template>
  <section class="blog-column section-padding pt-90">
    <div class="container">
      <div class="gallery">
        <div class="row">
          <div v-for="item in resultData" :key="item.path" class="items col-lg-4 col-md-6">
            <div class="item">
              <div class="img">
                <img :src="item.image" alt="" />
                <span class="date"><strong>{{ item.date.day }}</strong> {{ item.date.month }}</span>
              </div>
              <div class="cont">
                <span class="sub-title mb-15 opacity-8">{{ item.category }}</span>
                <h4>{{ item.title }}</h4>
                <NuxtLink :to="item.path" class="animsition-link more mt-20">Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
//= Common Scripts
import initIsotope from '@/common/initIsotope';

//= Static Data
const route = useRoute();
// data value
const resultData = ref({});
// conditionaly fetching based on the route query
if (route.query.category) {
  // example: /blog?category=tech
  const { data } = await useAsyncData(route.path, () => queryCollection('blog').where('category', '=', route.query.category).order('publishedDate', 'DESC').all());
  resultData.value = data.value;
} else if (route.query.tag) {
  // example: /blog/?tag=ui
  const { data } = await useAsyncData(route.path, () => queryCollection('blog').where('tags', 'IN', route.query.tag).order('publishedDate', 'DESC').all());
  resultData.value = data.value;
  if (resultData.value) {
    console.log(resultData.value);
  }
} else {
  // Default case: fetch all blog posts
  const { data } = await useAsyncData(route.path, () => queryCollection('blog').order('publishedDate', 'DESC').all());
  resultData.value = data.value;
}

// Initialize Isotope when component is mounted
onMounted(() => {
  initIsotope();
});
</script>
