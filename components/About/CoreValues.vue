<template>
    <section class="feat section-padding">
      <div class="container">
        <div class="sec-head pb-20 bord-thin-bottom mb-80">
          <div class="d-flex align-items-center">
            <div>
              <h3 class="f-bold text-u">Core Values</h3> <br>
              <div class="row">
                <p class="col-md-6 "> Our core values make Space a great place to learn, grow, and explore your wildest 
                    creative imagination. Every action is guided by these values. They bind us together, 
                    set us apart, and build our company culture. </p>
              </div>
            </div>
          
          </div>
        </div>
        <div class="row">
          <div v-for="item in data" :key="item.id" class="col-lg-3 col-md-6 items">
            <div class="item">
              <span class="numb">{{ item.numb }}</span>
              <div class="icon-img-50">
                <img :src="item.icon" alt="" />
              </div>
              <h6>{{ item.title }}</h6>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import data from '@/data/About/corevalues.json';
  </script>
  