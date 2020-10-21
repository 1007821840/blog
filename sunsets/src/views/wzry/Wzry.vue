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
          <div class="col-lg-3 col-md-6" @click="paths">
            <h2>上单</h2>
            <div class="her">
              <img src="../../static/img/wzry/timg.jpg">
            </div>
          </div>
          <div class="col-lg-3 col-md-6" @click="paths1">
            <h2>中单</h2>
            <div class="her">
              <img src="../../static/img/wzry/huow.jpeg">
            </div>
          </div>
          <div class="col-lg-3 col-md-6" @click="paths2">
            <h2>打野</h2>
            <div class="her">
              <img src="../../static/img/wzry/timg01.jpg">
            </div>
          </div>
          <div class="col-lg-3 col-md-6" @click="paths3">
            <h2>射手</h2>
            <div class="her">
              <img src="../../static/img/wzry/ssx.png">
            </div>
          </div>
        </div>
      </div> 
      <!-- <div class="container cook">
        <div class="row">
          <div class="col-md-8">
            <h2>内容</h2>
            <div>content</div>
          </div>
          <div class="col-md-4">
            <h2>这是我</h2>
          </div>
        </div>
      </div>  -->
    </main>
    <router-view/>
    <!-- <footer class="container">
      <p>&copy; Company 2017-2020</p>
    </footer> -->
    </scroll>
  </div>
</template>

<script>
   import Scroll from '@/components/common/scroll/Scroll'
   import header from '@/components/content/header.vue'
export default {
  name:"Home",
  data () {
    return {
      
    };
  },
  components: {
    Scroll,
    'wbc-nav':header,
  },
  updated() {
      this.loadMore()
    },
  mounted () {},
  methods: {
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

  
body {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	background-color: #403833;
	font-size: 100%;
	font-family: 'Open Sans';
	font-weight: 100;
	height:100%;
}
.row h2{
  text-align: center;

}

.cook{
  height: 1500px;
  margin-top: 20px;
}


</style>