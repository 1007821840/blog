<template>
    <div class="mac">
      <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div class="ssj">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>
        <div>5</div>

      </div>
      </scroll>
        
       
    </div>
  </template>
  
  <script>
      import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name:"Jungle",
    data () {
      return {
        
      };
    },
    components: {
      Scroll
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
      .mac{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ffffff;
          height: 100vh;
      }
      .ssj{
        height: 1500px;
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