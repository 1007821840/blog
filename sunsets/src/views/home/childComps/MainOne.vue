<template>
    <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h2>句子</h2>
            <div v-for="it in list" class="list-juzi">
              <div>
                {{it.juzi}}
              </div>
            </div>
           
          </div>
          <div class="col-md-3">
            <h2>欢迎大家来到sun的blog!</h2>
            <div class="right">
                <qq-nav>
                 <img src="../../../static/img/505510be3b11340f7f981bcc9c1c7255.jpg">
                </qq-nav>
            </div>
          </div>
        </div>
      </div> 
</template>

<script>
     import qq from '@/components/content/qq.vue'
export default {
    
  name:"MainOne",
  data () {
    return {
      list:[]
      
    };
  },
  components: {
    'qq-nav':qq
  },
  created() {
      this.getAdminList()
    },
  mounted () {},
  methods: {
    getAdminList() {
        var _this = this;
        this.$reqs.post('/users/juzi', {
        }).then(function (result) {
          //成功
          _this.list = result.data.data;
        }).catch(function (error) {
          console.log('ddd');
          //失败
        });
      },
  }
}
</script>
<style scoped>
  .list-juzi{
    width: 100%;
    margin:20px 0px;
   

  }
    
</style>