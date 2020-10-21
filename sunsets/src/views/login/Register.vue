<template>
    <div path="/register" class="regist">
      <div v-if="shows" @click="daj" class="fot"> 
        <p>注册成功</p>
      </div>
      <div ref='showss'>
      <div class="login">
        <div class="login-less">
      <div class="inp1">
        <input type="text" value="" placeholder="请输入用户名" ref="inp3" @focus="inp3" v-model="newUsername">
      </div>
      <div>
        <div class="inp2">
          <input type="password" value="" placeholder="密码" ref="inp4" @focus="inp4" v-model="newPassword">
        </div>
      </div>
      <div>
        <div class="inp2">
          <input type="password" value="" placeholder="确认密码" ref="inp5" @focus="inp5" v-model="renewPassword">
          <div ref="divz">{{divz}}</div>
        </div>
      </div>
      </div>
    </div>
    <div class="abled">
      <span @click="register">注册</span>
  </div>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"MoneyRegister",
    data () {
      return {
        showss:true,
        shows:false,
        newUsername:'',
        newPassword:'',
        renewPassword:'',
        divz:''
        
      };
    },
    components: {},
    mounted () {},
    methods: { 
      daj(){
        this.shows=!this.shows
        this.showss=!this.showss
  
      },
      register(){
        if (this.newPassword !=this.renewPassword ){
          this.divz='俩次输入的密码不同，请重新输入'
        }
        else{
          if(this.newUsername=='' || this.newPassword==''){
          this.divz='密码或者账号不能为空'
        }else{
          this.$refs.showss.style.display = 'none'
          this.shows=true
          this.divz='';
          var _this = this;
                  this.$reqs.post("/users/register",{
                          username:this.newUsername,
                          password:this.newPassword
                  }).then(function(result){ 
                      //成功
                      if(result.data.err){
                          alert(result.data.err);
                      }else{
              console.log('nice');
                      }
                      _this.disablebtn = false;
                      _this.loginText = "登录";
                      
                  }).catch(function (error) {
                      //失败
                      _this.disablebtn = false;
                      _this.loginText = "登录"
                  });
        }
        }
        },
      inp3(){
          this.$refs.inp3.placeholder=""
        },
        inp4(){
          this.$refs.inp4.placeholder=""
        },
        inp5(){
          this.$refs.inp5.placeholder=""
        },
        
    }
  }
  </script>
  <style scoped>
    .abled{
      text-align: center;
      line-height: 51px;
      width: 82px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
      height: 51px;
      position: fixed;
      bottom: 170px;
      right: 35px;
      border-radius:48px ;
      background: #f7f7f7;
      border-color: #f7f7f7;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }
    input::-webkit-input-placeholder {
          color:  #999999;
        }
        input::-moz-input-placeholder {
          color: #999999;
        }
        input::-ms-input-placeholder {
          color:  #999999;
        }
    .login {
      margin:0 20px 0;
      background-color: #F7F7F7;
    }
    .login-less{
      padding-top: 38px;
    }
    .regist{
      background-color: #F7F7F7;
    }
    .none{
      /* display:flex; */
      float: right;
      margin-top: 25px;
      color: #00A862;
      
  
    }
    .inp2 input{
      margin-top: 23px;
    }
    .plus-icon-enter-active{
      transition: opacity .5s;
    }
    .plus-icon-enter{
       opacity: 0;
    }
    .plus-icon-leave-active{
      transition: opacity .5s;
    }
    .plus-icon-leave-to{
      opacity: 0;
      
    }
    .fot img{
      width: 100%;
      height: 50vh;
    }
    .aaa{
      color: #00A862;
    }
    .fot p{
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      color: #A2DED4;
      
    }
    
    .huise{
      background-color: #F7F7F7;
      width: 100%;
      height: 500px;
  
    }
    .regist{
      height: 100vh;
      background-color:#F7F7F7;
    }
    .ppp{
      height: 50px;
      line-height: 30px;
      margin: 20px;
      font-size: 16px;
    }
    input::-webkit-input-placeholder {
          color:  #999999;
        }
        input::-moz-input-placeholder {
          color: #999999;
        }
        input::-ms-input-placeholder {
          color:  #999999;
        }
    #MoneyLogin {
      width: 100%;
     background-color: #F7F7F7;
    }
  
    .login {
      margin:0 20px 0;
      background-color: #F7F7F7;
     
     
    }
    .app{
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: 600;
      margin: 15px;
    }
    .login-less{
      padding-top: 38px;
     
    
    
    }
    #login-remember{
      margin-top: 20px;
      width: 28px;
      height: 28px;
    }
    .login-checkbox span{
     position: relative;
     top: -8px;
      margin-left: 10px;
      font-size: 15px;
  
    }
    .inp1 input,.inp2 input{
      color: #999999;
      outline: none;
      border: 0px ;
      border-bottom: 1px solid #d9d9d9;
      width: 100%;
      height: 34px;
      background-color: #F7F7F7;
    }
    .ble{
      box-shadow:0 0 2px #000;
      width: 330px;
      margin: auto;
      text-align: center;
      line-height: 48px;
      font-size: 20px;
      height: 48px;
      background-color: #ffffff;
      border-radius: 40px;
     
    }
    .tuo{
      width: 100%;
      height: 20px;
  
    }
    .abled{
      text-align: center;
      line-height: 51px;
      width: 82px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
      height: 51px;
      position: fixed;
      bottom: 170px;
      right: 35px;
      border-radius:48px ;
      background: #f7f7f7;
      border-color: #f7f7f7;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
      
    }
    .spanyz{
      color: #00A862;
    }
    .blem{
      height: 52px;
    }
    .none{
      /* display:flex; */
      float: right;
      margin-top: 25px;
      color: #00A862;
      
  
    }
    .inp2 input{
      margin-top: 23px;
    }
    
  </style>