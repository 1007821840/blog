<template>
  <div>
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <main role="main" class="main">
      <!-- <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, Sunset!</h1>
        </div>
      </div> -->
      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-lg-3 col-md-6" >
            <h2>上单</h2>
            <div class="her">
              <img src="../../static/img/wzry/timg.jpg" @click="paths">
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h2>中单</h2>
            <div class="her">
              <img src="../../static/img/wzry/huow.jpeg"  @click="paths1">
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h2>打野</h2>
            <div class="her">
              <img src="../../static/img/wzry/timg01.jpg" @click="paths2">
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h2>射手</h2>
            <div class="her">
              <img src="../../static/img/wzry/ssx.png" @click="paths3">
            </div>
          </div>
        </div>
      </div> 
    </main>
    <wzry-tab/>
    </scroll>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
   import Scroll from '@/components/common/scroll/Scroll'
   import header from '@/components/content/header.vue'
   import WzryTab from './childComps/WzryTab.vue'
export default {
  name:"Wzry",
  data () {
    return {
     
    };
  },
  components: {
    Scroll,
    'wbc-nav':header,
    WzryTab
  },
  
  updated() {
      this.loadMore()
    },
  mounted () {},
  methods: {
    getAdminList() {
        var _this = this;
        this.$reqs.post('/users/wzry', {
        }).then(function (result) {
          //成功
          _this.list = result.data.data;
          console.log(_this.list);
        }).catch(function (error) {
          console.log('ddd');
          //失败
        });
      },
    paths(){
      this.$router.push({ path: 'wzry/wzrysd' });
    },
    paths1(){
      this.$router.push({ path: 'wzry/mid' });
    },
    paths2(){
      this.$router.push({ path: 'wzry/jungle' });
    },
    paths3(){
      this.$router.push({ path: 'wzry/wzryss' });
    },
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
  .her img{
    width: 100%;
    height: 85%;
  }
  .her{
    width: 100%;
    height: 100%;
  }
  h2{
    text-align: center;
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