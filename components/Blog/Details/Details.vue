<template>
    <section class="blog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="main-post section-padding">
                        <!-- Blog Content -->
                        <div class="item pb-60">
                            <ContentRenderer v-if="page" :value="page" />
                        </div>
                        <!-- Info Area -->
                        <div class="info-area flex mt-20 pb-20">
                            <div>
                                <div class="tags flex">
                                    <div class="valign">
                                        <span>Tags :</span>
                                    </div>
                                    <div>
                                        <a v-for="tag in tags" :key="tag" :href="`/blog/?tag=${tag}`">{{ tag }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-auto">
                                <div class="share-icon flex">
                                    <div class="valign">
                                        <span>Share :</span>
                                    </div>
                                    <div>
                                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.twitter.com/"><i class="fa-brands fa-x-twitter"></i></a>
                                        <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
                                        <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Author Area -->
                        <!-- <div class="author-area mt-50 pb-50 bord-thin-bottom">
                            <div class="flex">
                                <div class="author-img mr-30">
                                    <div class="img">
                                        <img src="/assets/imgs/blog/author1.jpg" alt="" class="circle-img" />
                                    </div>
                                </div>
                                <div class="cont valign">
                                    <div class="full-width">
                                        <h6 class="fw-600 mb-10">Chris Smith</h6>
                                        <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae
                                            vulputate nibh libero ac metus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- Next Prev -->
                        <div class="next-prv-post flex mt-50">
                            <div class="thumb-post">
                                <a :href="prevPost?.path">
                                    <span class="fz-12 text-u ls1 mb-15"><i class="pe-7s-angle-left"></i>Prev
                                        Post</span>
                                    <h6 class="fw-600 fz-16">{{ prevPost?.title }}</h6>
                                </a>
                            </div>
                            <div class="thumb-post ml-auto text-right">
                                <a :href="nextPost?.path">
                                    <span class="fz-12 text-u ls1 mb-15">Next Post <i
                                            class="pe-7s-angle-right"></i></span>
                                    <h6 class="fw-600 fz-16">{{ nextPost?.title }}</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Comments Form -->
        <!-- <CommentsForm /> -->
    </section>
</template>

<script setup>
// Define the page prop
defineProps({
    page: {
        type: Object,
        required: true
    },
    tags: {
        type: Array,
        default: () => []
    },
    nextPost: {
        type: Object,
        required: false
    },
    prevPost: {
        type: Object,
        required: false
    }
})
</script>

<style scoped>
/* Quote styling using semantic blockquote */
:deep(blockquote),
:deep(.post-qoute) {
    position: relative;
    padding: 40px;
    padding-left: 120px;
    background: #141414;
    margin: 50px 0;
}

/* Fixed positioning for the quotation mark - centered vertically with the quote */
:deep(blockquote::before),
:deep(.post-qoute::before) {
    content: '“';
    position: absolute;
    top: 80px;
    left: -100px;
    font-size: 180px;
    font-family: Poppins;
    line-height: 0;
}

:deep(blockquote p) {
    font-size: 20px;
    /* Same as fz-20 class */
    font-weight: 500;
    line-height: 1.5;
    display: block;
}

:deep(blockquote cite),
:deep(.post-qoute .sub-title) {
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 20px;
    display: block;
}

/* Text styling */
:deep(.text) {
    margin-bottom: 20px;
}

:deep(.text p) {
    line-height: 1.8;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #ddd;
    margin: 0;
}

/* Inner images styling */
:deep(.iner-img) {
    height: 400px;
}

:deep(.iner-img img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Title styling */
:deep(.title) {
    margin-bottom: 10px;
}

:deep(.title h5) {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
}

/* List styling */
:deep(.unorder-list li),
:deep(.order-list li) {
    margin-top: 10px;
    opacity: .7;
    padding-left: 15px;
    position: relative;
}

:deep(.unorder-list li:before),
:deep(.order-list li:before) {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 0;
    top: 10px;
}

:deep(.order-list li) {
    padding-left: 0;
}

:deep(.order-list li:before) {
    display: none;
}

:deep(.order-list li span) {
    font-size: 13px;
}

/* Sub title */
:deep(.sub-title) {
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Helper class for block display */
:deep(.l-block) {
    display: block;
}

/* Heading styles with proper spacing */
:deep(h1) {
    font-size: 70px;
    line-height: 1.2;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 35px 0 25px;
}

:deep(h2) {
    font-size: 45px;
    line-height: 1.2;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 30px 0 20px;
}

:deep(h3) {
    font-size: 36px;
    line-height: 1.5;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 28px 0 18px;
}

:deep(h4) {
    font-size: 28px;
    line-height: 1.4;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 25px 0 15px;
}

:deep(h5) {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 25px 0 15px;
}

:deep(h6) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Mona-Sans Medium', sans-serif;
    margin: 20px 0 10px;
}

/* Text styling with proper spacing */
:deep(.text) {
    margin-bottom: 30px;
}

:deep(.text p) {
    line-height: 1.8;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #ddd;
    margin: 0 0 20px;
}

:deep(p) {
    line-height: 1.8;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #ddd;
    margin: 0 0 20px;
}

/* Quote styling with proper semantic support */
:deep(blockquote),
:deep(.post-qoute) {
    position: relative;
    padding: 40px;
    padding-left: 120px;
    background: #141414;
    margin: 30px 0;
}

:deep(blockquote::before),
:deep(.post-qoute::before) {
    content: '“';
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 180px;
    font-family: Poppins;
    line-height: 0;
}

:deep(blockquote p),
:deep(.post-qoute .l-block) {
    font-size: 20px;
    /* Same as fz-20 class */
    font-weight: 500;
    line-height: 1.5;
    display: block;
    margin-bottom: 15px;
}

:deep(blockquote cite),
:deep(blockquote footer),
:deep(.post-qoute .sub-title) {
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 20px;
    display: block;
    text-align: right;
}

/* Inner images styling */
:deep(.iner-img) {
    height: 400px;
    margin: 30px 0;
}

:deep(.iner-img img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Title styling */
:deep(.title) {
    margin: 30px 0 15px;
}

:deep(.title h5) {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
    font-family: 'Mona-Sans Medium', sans-serif;
}

/* Unordered list styling */
:deep(.unorder-list),
:deep(ul) {
    margin: 25px 0 30px;
}

:deep(.unorder-list h6),
:deep(ul h6) {
    margin-bottom: 15px;
}

:deep(.unorder-list li),
:deep(ul li) {
    margin-top: 10px;
    opacity: 0.7;
    padding-left: 20px;
    position: relative;
    list-style: none;
}

:deep(.unorder-list li:before),
:deep(ul li:before) {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 0;
    top: 10px;
}

/* Ordered list styling - FIXED */
:deep(.order-list),
:deep(ol) {
    margin: 25px 0 30px;
    counter-reset: item;
}

:deep(.order-list h6),
:deep(ol h6) {
    margin-bottom: 15px;
}

:deep(.order-list li),
:deep(ol li) {
    margin-top: 10px;
    opacity: 0.7;
    position: relative;
    padding-left: 30px;
    list-style: none;
}

/* Remove the ::before that was trying to add numbers */
:deep(.order-list li:before),
:deep(ol li:before) {
    display: none;
}

/* Match the exact implementation from Content.vue */
:deep(.order-list li span) {
    font-size: 13px;
    position: absolute;
    left: 0;
    top: 2px;
    color: #ccc;
    /* Match the color with dots */
}

/* For standard <ol> elements, add proper numbering */
:deep(ol li) {
    counter-increment: item;
}

:deep(ol li::before) {
    content: counter(item, decimal-leading-zero) " -";
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 13px;
    color: #ccc;
    /* Match the color with dots */
    display: block;
    /* Make sure it's displayed */
}

/* Target the ul inside order-list too for backward compatibility */
:deep(.order-list ol.rest li) {
    padding-left: 30px;
}

/* Sub title */
:deep(.sub-title) {
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Helper class for block display */
:deep(.l-block) {
    display: block;
}

/* Additional spacing helpers */
:deep(.mt-10) {
    margin-top: 10px !important;
}

:deep(.mt-20) {
    margin-top: 20px !important;
}

:deep(.mt-30) {
    margin-top: 30px !important;
}

:deep(.mt-50) {
    margin-top: 50px !important;
}

:deep(.mb-10) {
    margin-bottom: 10px !important;
}

:deep(.mb-20) {
    margin-bottom: 20px !important;
}

:deep(.mb-30) {
    margin-bottom: 30px !important;
}

:deep(.mb-50) {
    margin-bottom: 50px !important;
}
</style>