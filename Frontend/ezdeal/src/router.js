import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Anuncio from './views/Anuncio.vue'
import Usuario from './views/Usuario.vue'
import Registro from './views/Registro.vue'
import Solicitud from './views/Solicitud.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/anuncios',
      name: 'anuncios',
      component: Anuncio
    },
    {
      path : '/usuarios/:id',
      name : 'usuarios',
      component: Usuario
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: Solicitud
    },
  ]
})
