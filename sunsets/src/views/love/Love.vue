<template>
  <div>
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-lg-3">
            <h2>内容</h2>
            <div>content</div>
          </div>
          <div class="col-lg-3">
            <h2>欢迎大家来到sun的blog!</h2>
          </div>
          <div class="col-lg-3">
            <h2>欢迎大家来到sun的blog!</h2>
          </div>
          <div class="col-lg-3">
            <h2>欢迎大家来到sun的blog!</h2>
          </div>
        </div>
      </div> 
    </scroll>

  </div>
</template>

<script>
     import Scroll from '@/components/common/scroll/Scroll'
  import header from '@/components/content/header.vue'
export default {
  name:"",
  data () {
    return {
      
    };
  },
  components: {
    'wbc-nav': header,
      Scroll
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