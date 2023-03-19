import {
  createRouter, createWebHistory
} from 'vue-router'
import HoMe from './components/pages/HoMe.vue'

import usersSpa from './users/usersSpa.vue'
import TemplateUsers from './users/TemplateUsers.vue'
import ShowUsers from './users/ShowUsers.vue'

import InDex from './posts/InDex.vue'
import TemplatePosts from './posts/TemplatePosts.vue'
import ShowPost from './posts/ShowPost.vue'
import CreatePost from '@/posts/CreAte.vue'

import CalCulater from './components/pages/CalCulater.vue'
import PraCtice from './components/PraCtice/PraCtice.vue'
import PaGe2 from './components/pages/PaGe2.vue'
import PaGe3 from './components/pages/PaGe3.vue'

const routes = [
  { path: '/', name: 'Home', component: HoMe },
  {path:'/calculater' , name : 'calculater', component : CalCulater },
  {path:'/PraCtice' , name : 'PraCtice', component : PraCtice},
  {path:'/page-2' , name : 'page-2', component : PaGe2 },
  {path:'/PaGe3' , name : 'PaGe3', component : PaGe3 },

  {
    path: '/usersSpa', name: 'userTemplate', component: TemplateUsers, children: [
      {path: '', name: 'user', component: usersSpa} ,
      { path: ':id', name: 'userId', component: ShowUsers },
    ],
  },
  {
    path: '/InDex', name: 'TemplatePosts', component: TemplatePosts, children: [
      {path: '', name: 'post', component: InDex} ,
      {path: 'Create', name: 'CreatePost', component: CreatePost} ,
      { path: ':id', name: 'postId', component: ShowPost },
    ],
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes

})

router.beforeEach((to, from, next) => {
  // if (to.name === 'User') {
  //   next()
  // } else {
  //   next()
  // }
  next()

});


export default router;