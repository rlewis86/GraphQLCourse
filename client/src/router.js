import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

import AddPost from './components/Posts/AddPost';
import Posts from './components/Posts/Posts';

import Profile from './components/Auth/Profile';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: AddPost
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
})
