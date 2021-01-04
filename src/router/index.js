import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/views/layout/layout.vue'),
    children:[
      {
        path:'',
        name:'index',
        component:()=>import('@/views/index.vue')
      },
      {
        path:'files',
        name:'files',
        component:()=>import('@/views/files.vue')
      },
      {
        path:'PersonnelFiles',
        name:'PersonnelFiles',
        component:()=>import('@/views/PersonnelFiles.vue')
      },
      {
        path:'parameter',
        name:'parameter',
        component:()=>import('@/views/parameter.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
