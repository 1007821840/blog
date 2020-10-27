<template>
  <div class="sugg">
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
     <home-swipers/>
     <suggest-js/>
      </scroll>
      
  </div>
</template>
<script>
  import HomeSwipers from '@/views/suggest/childComps/HomeSwiper.vue'
  import SuggestJs from '@/views/suggest/childComps/SuggestJs.vue'
    import Scroll from '@/components/common/scroll/Scroll'
   import header from '@/components/content/header.vue'
export default {
  name:"Suggest",
  data () {
    return {
      
    };
  },
  components: {
    SuggestJs,
    HomeSwipers,
    Scroll,
    'wbc-nav':header,
  },
  created(){
  },
  mounted () {
  
  },
  updated() {
      this.loadMore()
    },
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

  @media screen and (max-width: 768px) {
    .wrapper {
    background-color: #ffffff;
    }
  }
  
</style>