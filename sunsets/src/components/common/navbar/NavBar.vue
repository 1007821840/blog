<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavBar',
    data() {
      return {
      };
    },
    components: {},
    mounted() { },
    methods: {}
  }
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffff;
    display: flex;
    line-height: 49px;
    height: 49px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .left{
    flex: 5;
  }
  .right {
    flex: 1;
    /* background-color: red; */
  }
  .center {
    flex: 1;
    /* background-color: aqua; */
  }
</style>