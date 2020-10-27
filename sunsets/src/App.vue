<template>
  <div id="app">
    <keep-alive exclude="Kep">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  @import "./assets/base.css";
  body {  
  width: 100vw;  
  overflow: hidden;  
  padding-left: calc(100vw - 100%);  
}  

</style>

