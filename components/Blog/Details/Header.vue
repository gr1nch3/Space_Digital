<template>
  <header class="blog-header section-padding pb-0">
    <div class="container mt-80">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="caption">
            <div class="sub-title fz-12">
              <a :href="`/blog/?category=${category}`"><span>{{ category }}</span></a>
            </div>
            <h1 class="fz-55 mt-30">{{ title }}</h1>
          </div>
          <div class="info d-flex mt-40 align-items-center">
            <div class="left-info">
              <div class="d-flex">
                <div class="author-info">
                  <div class="d-flex align-items-center">
                    <a href="#0" class="ml-20">
                      <span class="opacity-7">Author</span>
                      <h6 class="fz-16">Space Digital</h6>
                    </a>
                  </div>
                </div>
                <div class="date ml-50">
                  <a href="#0">
                    <span class="opacity-7">Published</span>
                    <h6 class="fz-16">{{ date.month }} {{ date.day }}, {{ date.year }}</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- style as background image -->
    <img class="background bg-img mt-80" :src="image" :style="{ backgroundImage: `url(${image})` }" />
  </header>
</template>

<script setup>
// Define the page prop
defineProps({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Object,
    required: true
  },
})

</script>
