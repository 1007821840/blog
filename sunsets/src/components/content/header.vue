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
          <li class="nav-item active" @click="homerou">
            <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" @click="love">
            <a class="nav-link" href="#">喜欢</a>
          </li>
          <li class="nav-item" @click="message">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" >留言版</a>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">下拉</div>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <div class="dropdown-item"  @click="wzry">王者荣耀攻略(自创)</div>
              <div class="dropdown-item" @click='suggest'>写过的项目介绍</div>
              <div class="dropdown-item" >待定。。</div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <div class="logins" @click="log">登录</div>
          </li>
          <li class="nav-item active">
            <div class="register" @click="regis">注册</div>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {

      };
    },
    components: {},
    mounted() { },
    methods: {
      suggest(){
        this.$router.push({ path: '/suggest' });
      },
      wzry(){
        this.$router.push({ path: '/wzry' });
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

</style>