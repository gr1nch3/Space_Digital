<!-- <template>
  <header class="land-header valign">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="caption text-center">
            <h1 class="fz-60">
              
              Creating brands, and products <br> that resonates with people!
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>  -->

<template>
  <header class="land-header valign">
    <div class="gradient">
    <div class="container wrapper">
      <h1 class="title text-center">
        Building Brands & Products <br> that resonates with people!
      </h1>
      <p class="sub-text mt-3">
        We develop web and mobile applications for <br> businesses.
      </p>
    </div>
  </div>
  </header>
  
</template>

<style >
.title {
  font-family: "DM Sans", serif;
  font-size: 70px;
  line-height: 1;
  font-weight: 600;

  background: linear-gradient(45deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 43%, 1) 100%);
  -webkit-background-clip: text;       
  -webkit-text-fill-color: transparent; 
  background-clip: text;                
  color: transparent;     
  
}

.wrapper {
  margin: 0 auto;
  max-width: 80%;
  text-align: center;
}

.gradient {
  width: 100%;
  
}

.sub-text {
  font-weight: 200;
  font-family: "DM Sans", serif;
  line-height: 1.2;
  font-size: 18px;
}

/* Responsive Media Queries */
@media screen and (max-width: 1025px) {
  .title {
    font-size: 50px;
  }
}

@media screen and (max-width: 894px) {
  .wrapper {
    max-width: 100%;
  }
  .title {
    font-size: 40px !important;
  }
}

@media screen and (max-width: 613px) {
  .sub-text {
    font-size: 13px !important;
  }
  .title {
    font-size: 30px !important;
    max-width: 100% !important;
  }
  .wrapper {
    padding: 0;
    max-width: 100%;
  }
}

@media screen and (max-width: 457px) {
  .sub-text {
    max-width: 100% !important;
  }
}

</style>