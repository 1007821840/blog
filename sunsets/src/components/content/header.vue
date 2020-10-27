<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">图像</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active zz" @click="homerou">
           <div>首页</div>
          </li>
          <li class="nav-item zz" @click="love">
          <div>喜欢</div>
          </li>
          <li class="nav-item zz" @click="message">
            <div>留言版</div>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">下拉</div>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <div class="dropdown-item"  @click="wzry">王者荣耀攻略(自创)</div>
              <div class="dropdown-item" @click='suggest'>写过的项目介绍</div>
              <div class="dropdown-item" @click="pok">博客(摘要)</div>
              <div class="dropdown-item" >待定。。</div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active zj">
            <div class="logins" @click="log">{{ssj}}</div>
          </li>
          <li class="nav-item active zj">
            <div class="logins" @click="logout">退出</div>
          </li>
          <li class="nav-item active zj">
            <div class="register" @click="regis">注册</div>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    name: "Kep",
    data() {
      return {
        ssj:'登录',
        kong:''

      };
    },
    updated(){
	    	

    },
    created(){
      
     console.log(sessionStorage.getItem("username"));
      this.ssj=sessionStorage.getItem("username");

    },
    components: {},
    mounted() {},
    methods: {
      logout(){ //退出系统
        sessionStorage.setItem('username','');
				var _this = this;
				this.$reqs.post("/users/logout",{
					
				}).then(function(result){
					//成功
					// _this.$router.push({path:'/'});
				}).catch(function (error) {
					//失败
			    console.log(error)
        });
        alert('请重新登录')
         window.location.href="http://localhost:8080";
        
			},
      suggest(){
        this.$router.push({ path: '/suggest' });
      },
      wzry(){
        this.$router.push({ path: '/wzry' });
      },
     pok(){
        this.$router.push({ path: '/blok' });
      },
      love(){
        this.$router.push({ path: '/love' });
      },
      homerou(){
        this.$router.push({ path: '/home' });
      },
      log() {
        this.$router.push({ path: '/' });
      },
      regis() {
        this.$router.push({ path: '/register' });
      },
      message() {
        console.log(1);
        this.$router.push({ path: '/message' });
      }
    }
  }
</script>
<style scoped>
  .zz div{
    width: 60px;
    height: 40px;
    position: relative;
    top: 8px;
    font-size: 18px;
    color: #ffffff;
  }
.zj div{
  width: 50px;
  font-size: 18px;
    color: #ffffff;
}
</style>