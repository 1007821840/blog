<template>
  <div class="audio">
    <div>
      <div class="audio01" >
        <img src="../../static/img/fd89dedd37de61ace12d360dd39e2a72.jpg">
      </div>
      <div @click="top">
        <m-audio src="https://aod.cos.tx.xmcdn.com/storages/74dc-audiofreehighqps/1E/05/CMCoOSEDGm_ZACIVrgBOLyCf.m4a">
        </m-audio>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        rotate: false,
        r:0,
        timer: ""
      };
    },
    components: {},
    mounted() { 
    
    },
    methods: {
     dsq(){

     },

      top(){
       this.rotate=!this.rotate
       if(this.rotate==true){
        this.timer=setInterval(()=>{
        this.r+=15
        $('.audio01').css('transform','rotate('+this.r+'deg)')
       },100)
       }
       else{
         clearInterval(this.timer)
         
       }
      }
    }
  }
</script>
<style scoped>
  .audio {
    position: relative;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);


    /* padding: aut; */
    /* position: absolute;
    left: 50%;   
     top: 50%;
    margin: -150px 0 0 -50px; */
  }

  .audio01 img {
    border-radius: 100px;
    width: 100%;
    height: 100%;
  }

  audio {
    background-color: red !important;
  }
  .audio01{
    border-radius: 100px;
    width: 100px;
    height: 100px;
    transition: all .5s;
  }

  /* .aa {
    transition: all 2s;
  }

  .go {
    transform: rotate(-360deg);
    transition: all 2s;
  } */
</style>