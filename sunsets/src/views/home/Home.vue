<template>
  <div>
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <main role="main" class="main">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, Sunset!</h1>
         <loa-der/>
        </div>
      </div>
      <main-one/>
      <main-two/>
    </main>
    <footer class="container">
      <p>&copy; Company 2017-2020</p>
    </footer>
    </scroll>
  </div>
</template>

<script>
  import MainOne from './childComps/MainOne.vue'
  import MainTwo from './childComps/MainTwo.vue'
   import Scroll from '@/components/common/scroll/Scroll'
   import header from '@/components/content/header.vue'
   import LoaDer from './childComps/LoaDer.vue'
export default {
  name:"Home",
  data () {
    return {
      
    };
  },
  components: {
    Scroll,
    LoaDer,
    'wbc-nav':header,
    MainOne ,
    MainTwo 
  },
  updated() {
      this.loadMore()
    },
  mounted () {},
  methods: {
    contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
  }
}
</script>
<style scoped>
  .jumbotron{
    background-image: url(../../static/img/home1.jpg);
    background-size:100% 100%;
    height: 768px;
  }
  @media screen and (max-width: 768px) {
    .jumbotron{
    height: 444px;
  }
  
}
.wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 56px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  
</style>