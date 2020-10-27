<template>
  <div>
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
     
      <home-swipers/>
      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-lg-3 col-md-6 love-left" v-for="it in lists">
            <div class="ajax-image">
              <img v-lazy="it.image">
            </div>
            <div>{{it.title}}</div>
          </div>
        </div>
      </div> 
    </scroll>

  </div>
</template>

<script>
    import HomeSwipers from '@/views/suggest/childComps/HomeSwipers.vue'
     import Scroll from '@/components/common/scroll/Scroll'
  import header from '@/components/content/header.vue'
export default {
  name:"Love",
  data () {
    return {
      lists:[]
      
    };
  },
  created(){
    this.getAdminList()

  },
  updated() {
      this.loadMore()
    },
  components: {
    HomeSwipers,
    'wbc-nav': header,
      Scroll
  },
  mounted () {},
  methods: {
    getAdminList() {
        var _this = this;
        this.$reqs.post('/users/love', {
        }).then(function (result) {
          //成功
          _this.lists = result.data.data;
        }).catch(function (error) {
          console.log('ddd');
          //失败
        });
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
  .jumbotron{
    background-image: url(../../static/img/love/her.jpg);
    background-size:100% 100%;
    height: 768px;
  }
  .love-left{
    height: 250px;
   margin:10px 0px;
  }
  .ajax-image img,.ajax-image{
    border-radius: 10px;
    width: 100%;
    height: 90%;
    
  }

  @media screen and (max-width: 768px) {
    .jumbotron{
    height: 444px;
  }
  }
</style>