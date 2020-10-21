<template>
    <div class="nav-bar">
      <div class="center">
        <slot name="center" class="center1"></slot>
      </div>
    </div>
  </template>
  <script>
    export default {
      name: 'NavBaro',
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
        color: rgba(0, 0, 0, 0.87);
    font-size: 22px;
    font-weight: 700;
      display: flex;
      line-height:60px;
      height: 60px;
      box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
    .center {
      flex: 1;
      /* background-color: aqua; */
    }
   
  </style>