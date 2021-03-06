import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from 'axios';
import ElementUI from 'element-ui';
import VueLazyLoad from 'vue-lazyload'
import audio from 'vue-mobile-audio'
import Swiper from 'swiper';
import 'bootstrap'
// import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
// import 'swiper/dist/css/swiper.min.css';
// import "swiper/swiper-bundle.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import VideoPlayer from 'vue-video-player'

axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLazyLoad)
Vue.use(VideoPlayer);
Vue.use(audio);
// Vue.use(Swiper);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
