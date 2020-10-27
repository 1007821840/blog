<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/img/xm/home3 (2).jpg">
        </div>
        <div class="swiper-slide">
            <img src="../../../static/img/xm/home3 (3).jpg">
        </div>
        <div class="swiper-slide">
            <img src="../../../static/img/xm/home3 (5).jpg">
        </div>
        <div class="swiper-slide">
            <img src="../../../static/img/xm/home3 (6).jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev" @click="prev"></div>
      <div class="swiper-button-next" @click="next"></div>
      <!-- 如果需要滚动条 -->
     
    </div>
  </template>
  
  
  <script>
    import Swiper from 'swiper';
    //   import Swiper from 'swiper';
    //  import "swipers/swiper.min.css";
    //  import Swiper from 'swiper/dist/js/swiper.min.js'
  
    export default {
      name: "HomeSwiper",
      data() {
        return {
          sliderList: [
            {
              sliderImage: '../../../static/img/head.jpg'
            },
            {
              sliderImage: '../../../static/img/home1.jpg'
            }
          ]
        }
  
      },
      // props: {
      //   banners: {
      //     type: Array,
      //     default() {
      //       return []
      //     }
      //   }
      // },
      components: {
        Swiper,
  
      },
      mounted() {
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
              },
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        });
      },
      methods: {
        prev(){
          console.log(1);
          this.$refs.mySwiper.slidePrev();
        },
        next(){
          this.$refs.mySwiper.slidePrev();
        }
  
      }
    }
  </script>
  
  <style scoped>
    @import "../../../../node_modules/swiper/dist/css/swiper.min.css";
  
   
  
    .swiper-container {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  
    .swiper-wrapper {
      height: 536px;
    }
    @media screen and (max-width: 768px) {
      .swiper-wrapper {
        height: 368px;
      }
    }
  
    .swiper-slide img {
      width: 100%;
    }
  
    .swiper-slide {
      width: 100% !important;
      text-align: center;
      background: #fff;
      /* Center slide text vertically */
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  </style>