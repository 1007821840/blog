<template>
  <div class="mac">
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div class="ssj">
        <!-- {{wzry}} -->
        <div class="wzryname">{{wzry.name}}</div>
        <div class="img1">
          <div v-for="(item,index) in wzry.img" class="img" @click="img(index)">
            <img :src="item">
          </div>
          <!-- <div></div> -->
        </div>
        <div v-for="(item,i) in wzry.imgdig" class="imgdig" :class="{imgd:cot==i}">
          <img :src="item">
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
          <div >
            <h2>技能介绍</h2>
            <div v-for="(it,iii) in listjn.skill" class="skillimg" @click="skill(iii)">
              <img :src="it[0]">
            </div>
          </div>
          <div>
            <div v-for="(it,ii) in listjn.skill" class="skillimgs" :class="{skillc:cots==ii}">
              <div class="skillh">
              <div>{{it[1]}}</div>
              <div>冷却值：{{it[2]}}</div>
              <div>消耗：{{it[3]}}</div>
              </div>
              <div class="its">{{it[4]}}</div>
            </div>
          </div>
          </div>
          <div class="col-md-4">
            <div class="gy">想看更多关于{{wzry.name}}的资料吗</div>
            <div>点击下方图片链接</div>
            <div class="ljt">
              <a :href="lj">
              <img src="../../../static/img/545da8a3c6e490c56bb295b2c2b08a86.jpg">
              </a>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>

</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name: "Details",
    data() {
      return {
        cot: 1,
        cots: 0,
        list: [],
        listjn: [],
        zfc:''

      };
    },
    components: {
      Scroll
    },
    updated() {
      this.loadMore()
    },
    created() {
      console.log(this.$store.state.it);
      this.getsList()

    },
    computed: {

      wzry() {
        return this.$store.state.it
      },
      lj(){
        return 'https://pvp.qq.com/web201605/herodetail/'+this.zfc+'.shtml'
      }

    },
    mounted() { },
    methods: {
      skill(iii) {
        console.log(iii);
        this.cots = iii

      },
      getsList() {
        var _this = this;
        this.$reqs.post('/users/wzryjn', {
        }).then(function (result) {
          //成功
          _this.list = result.data.data;
          _this.list.some(it => {
            if (it.name[0] == _this.$store.state.it.name) {
              _this.listjn = it
              _this.zfc=it.skill[0][0].slice(46,49)
              console.log(_this.zfc);
            }
          });
        }).catch(function (error) {
          console.log('ddd');
          //失败
        });
      },
      img(index) {
        this.cot = index

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
  .skillc {
    display: block !important;
  }

  .mac {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    height: 100vh;
  }

  .ssj {
    position: relative;
  }
.gy{
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
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
  .ljt img{
    width: 100%;
    height: 100%;
  }
  .skillh{
    display: flex;
  }
  .skillh>div{
    flex:1
  }

  .img {
    margin-left: 8px;

    width: 67px;
    height: 67px;
    display: inline-block;
  }

  .img1 {
    z-index: 999;
    position: absolute;
    bottom: 50px;
    right: 50px;

  }
  .its{
    margin-top: 10px;
  }

  .img>img {
    border: solid 4px #7a7a7a;
    border-radius: 0 12px;
    width: 100%;
    height: 100%;

  }

  .imgdig {

    width: 100%;
    height: 800px;
    display: none;
  }

  .imgdig>img {
    width: 100%;
    height: 100%;
  }

  .wzryname {
    z-index: 9999;
    position: absolute;
    top: 50px;
    left: 50px;
    font-size: 50px;
    font-weight: bold;
    color: #FFF;
  }

  .skillimg {
    display: inline-block;
    margin-right: 20px;
    width: 80px;
    height: 80px;
  }
  .skillimg>img{
    width: 100%;
    height: 100%;

  }

  .skillimgs {
    margin-top: 20px;
height: 200px;
    display: none;
  
  }

  .imgd {
    display: block;
  }

  @media screen and (max-width: 1024px) {
    .skillimg {
    display: inline-block;
    margin-right: 10px;
    width: 60px;
    height: 60px;
  }
    .wzryname {
      position: absolute;
      top: 20px;
      left: 10px;
      font-size: 30px;
      font-weight: bold;
      color: #FFF;

    }

    .imgdig {
      height: 350px;
    }

    .img {
      width: 43px;
      height: 43px;
    }

    .img1 {
      z-index: 999;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
</style>