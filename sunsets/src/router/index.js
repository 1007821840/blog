import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Login = () => import('../views/login/Login.vue')
const Register = () => import('../views/login/Register.vue')
const Message = () => import('../views/message/Message.vue')
const Love = () => import('../views/love/Love.vue')
const Suggest = () => import('../views/suggest/Suggest.vue')
const Wzry = () => import('../views/wzry/Wzry.vue')
const WzrySd = () => import('../views/wzry/childComps/WzrySd.vue')
const WzrySs = () => import('../views/wzry/childComps/WzrySs.vue')
const Mid = () => import('../views/wzry/childComps/Mid.vue')
const Jungle = () => import('../views/wzry/childComps/Jungle.vue')

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    name:'Login',
    component: Login
  },
  {
    path: '/love',
    name:'Love',
    component: Love
  },
  {
    path: '/suggest',
    component: Suggest
  },
  {
    path: '/wzry',
    component: Wzry,
    children:[
      {
        path: 'wzrysd',
        component: WzrySd
      },
      {
        path: 'wzrysd',
        component: WzrySd
      },
      {
        path: 'wzryss',
        component: WzrySs
      },
      {
        path: 'mid',
        component: Mid
      },
      {
        path: 'jungle',
        component: Jungle
      },
    ]
  },
  {
    path: '/message',
    component: Message
  },
  ]
  const router = new Router({
    routes,
    mode: 'history'
  })
  
  const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  };
  
  export default router