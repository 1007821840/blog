<template>
    <div class="nav-bar">
      <div class="left">
        <slot name="left1"></slot>
      </div>
      <div class="center">
        <slot name="center1"></slot>
      </div>
      <div class="right">
        <slot name="right1"></slot>
      </div>
    </div>
  </template>
  <script>
    export default {
      name: 'NavBars',
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
      color: #cccc;
      display: flex;
      line-height: 65px;
      height: 65px;
      box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
    .left{
      flex: 2;
      text-align: center;
    }
    .right {
      flex: 2;
    }
    .center {
      flex: 5;
    }
  </style>