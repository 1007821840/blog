<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="uu">
          <div v-for="(it,i) in items" @click="tab(i)">
            <div>
            {{it}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="it in list" class="list" @click="wzry(it)">
          <div class="list-img">
            <img v-lazy="it.img[0]">
          </div>
          <div class="list-text">{{it.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WzryTab",
    data() {
      return {
        list: [],
        items:['全部','上单','中单','打野','射手']

      };
    },
    components: {},
    mounted() { },
    created() {
      this.getAdminList()
    },
    methods: {
      wzry(it){
        console.log(it);
        this.$store.commit('wzrypf',it)
        this.$router.push({ path: 'wzry/details' });
      },
      tab(i){
        console.log('1');
      },
      getAdminList() {
        var _this = this;
        this.$reqs.post('/users/wzry', {
        }).then(function (result) {
          //成功
          _this.list = result.data.data;
          console.log(result);
        }).catch(function (error) {
          console.log('ddd');
          //失败
        });
      },
    }
  }
</script>
<style scoped>
  .list-text {
    width: 100%;
    text-align: center;
  }

  .list {
    display: table-cell;
    text-align: center;
    width: 114px;
    height: 140px;
  }

  .list-img img {
    width: 100%;
    height: 100%;
  }

  .row .uu {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .row .uu div{
    height: 40px;
    line-height: 40px;
    flex: 1;
    text-align: center;
  }

  .list-img {
    /* display: inline-block; */
    display: inline-block;
    width: 87px;
    height: 87px;
  }
</style>