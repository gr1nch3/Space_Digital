<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <BlogDetailsHeader :category="page.category" :title="page.title" :image="page.image" :date="page.date" />
        <BlogDetails :page="page.body" :tags="page.tags" :prevPost="data?.[0]" :nextPost="data?.[1]" />
      </main>
      <CommonFooter1 :subBg="true" />
    </div>
  </div>
</template>

<script setup>

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const { data } = await useAsyncData('surround', () => {
    return queryCollectionItemSurroundings('blog', route.path)
})


//= Page Head
useHead({
  titleTemplate: `%s - ${page.value.title}`,
  link: page.value?.seo?.link,
  bodyAttrs: {
    class: "main-bg",
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true },
    { src: "https://kit.fontawesome.com/d8d8f76b04.js" },
  ],
});


useSeoMeta({
  title: "Space",
  ogTitle: `Space - ${page.value.title}`,
  description: page.value?.description,
  ogDescription: page.value?.description,
  ogImage: page.value?.image
})

</script>
