<template>
    <CommonLoader />
    <div id="smooth-wrapper">
        <CommonNavbar />
        <CommonMenu />
        <div id="smooth-content">
            <main class="main-bg">
                <div class="main-box main-bg ontop">
                    <header class="header-project3 bg-img d-flex align-items-end" :data-background="item.headerImage"
                        data-overlay-dark="9">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="caption">
                                        <h1>{{ item.title }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section class="section-padding">
                        <div class="container">
                            <div class="info mb-20 pb-20 bord-thin-bottom">
                                <div class="row">
                                    <div class="col-md-6 col-lg-3">
                                        <div class="item mb-30">
                                            <span class="opacity-8 mb-5">Category :</span>
                                            <h6>{{ item.category }}</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="item mb-30">
                                            <span class="opacity-8 mb-5">Client :</span>
                                            <h6>{{ item.client }}</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="item mb-30">
                                            <span class="opacity-8 mb-5">Start Date :</span>
                                            <h6>{{ item.date.month }} {{ item.date.day }}, {{ item.date.year }}</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="item">
                                            <span class="opacity-8 mb-5">Designer :</span>
                                            <h6>Space Digital</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-11">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h4 class="mb-50">01 . The Challenge</h4>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="text">
                                                <p class="fz-18">
                                                    {{ item.challenge }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-padding">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-11">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h4 class="mb-50">02 . The Solution</h4>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="text">
                                                <p class="fz-18">
                                                    {{ item.solution }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ProjectWorks :images="item.images" />
                </div>
                <ProjectNextProject :item="data?.[1]" />
            </main>
            <CommonFooter1 />
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { data: item } = await useAsyncData(route.path, () => {
    return queryCollection('projects').path(route.path).first()
})

const { data } = await useAsyncData('surround', () => {
    return queryCollectionItemSurroundings('projects', route.path)
})

//= Page Head
useHead({
    titleTemplate: `%s - ${item.value.title}`,
    description: item.value.description,
    meta: [
        { name: 'description', content: item.value.description },
        { property: 'og:title', content: item.value.title },
        { property: 'og:description', content: item.value.description },
        { property: 'og:image', content: item.value.headerImage },
        { property: 'og:url', content: route.path }
    ],
    bodyAttrs: {
        class: 'main-bg'
    },
    script: [
        { src: "/assets/js/smoother-script.js", defer: true }
    ]
});

import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
    loadBackgroudImages();
});

</script>