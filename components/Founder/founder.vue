<template>
  <section class="section-padding">
    <div class="container">

      <!-- web view display, it is hidden on mobile -->
      <div class="webview container row">
        <div class="col-lg-6"><div style="opacity: 0.5; margin-bottom: 15px;" class="quote-icon icon-img-80 pt-10 quote-img ">
            <img width="10px" size="5" src="/assets/imgs/svg-assets/quote.png" />
          </div>

          <h4 class="quote-text">
            At Space we rethink how people connect with technology. Many tech companies focus on solutions but overlook
            the most important part, the users. Solving problems matters, but so does understanding who they’re for.
          </h4>

          <div class="profile-container">
            <div class="profile-info">
              <h4 class="name">
                Harold T. Jones, Jr.
                <span> <a href="https://www.linkedin.com/in/harolddd-jonesss/" target="_blank"
                    rel="noopener noreferrer">&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg></a></span>
              </h4>
              <span class="founder"> Founder </span>
            </div>

          </div>
        
        </div>
        <div class="col-lg-6">
          <div class="founder-container">
            <img class="founder-img" src="public\assets\imgs\founder_2.jpg" alt="" srcset="">
          </div>
        </div>
      </div>


      <!-- display on mobile view \\ hidden on web -->
      <div class="mobile-view container row">
        <div class="quote-container container col-lg-12">

          <div style="opacity: 0.5; margin-bottom: 15px;" class="quote-icon icon-img-80 pt-10 quote-img ">
            <img width="10px" size="5" src="/assets/imgs/svg-assets/quote.png" />
          </div>

          <h4 class="quote-text">
            At Space we rethink how people connect with technology. Many tech companies focus on solutions but overlook
            the most important part, the users. Solving problems matters, but so does understanding who they’re for.
          </h4>

          <div class="profile-container">
            <img class="profile-image" src="public\assets\imgs\founder.jpg" alt="" srcset="">
            <div class="profile-info">
              <h4 class="name">
                Harold T. Jones, Jr.
                <span> <a href="https://www.linkedin.com/in/harolddd-jonesss/" target="_blank"
                    rel="noopener noreferrer">&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg></a></span>
              </h4>
              <span class="founder"> Founder </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style>

/* mobile view */
.mobile-view{
  display: none;
}
/* media query */
@media screen and (max-width:1201px) {
  .webview{
    display: none;
  }
  .mobile-view{
    display: contents;
  }
  .quote-text{
    font-family: Plus Jakarta Sans, serif !important;
  }
  
}
/* mobile view // */


.founder-img{
  border-radius: 5%;
  width: 60%;
  float: right;
}
.quote-icon{
  width: 40px;
}
.profile-container{
  display: flex;
  align-items: center;
  gap: 8px;
}
.founder {
  color: #00adee;
  font-weight: bold;
  font-size: 9.5px;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.name {
  font-family: Plus Jakarta Sans, serif;
  font-size: 17px;
  font-weight: 800;
}

.quote-text {
  font-family: Plus Jakarta Sans, serif;
  line-height: 48px;
  font-size: 30px;
  font-weight: 200;
}



.profile-container {
  margin-top: 30px;

}

.profile-image {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 15px;
}
</style>
<script setup>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
//= Common Scripts
import removeSlashFromPagination from "@/common/removeSlashFromPagination";
//= Static Data
import data from "@/data/Founder/founder.json";
</script>
