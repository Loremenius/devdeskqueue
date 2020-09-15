import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

router.beforeEach((to, from, next)=>{
  // if route needs authorization to access
  if(to.matched.some(record => record.meta.requiresAuth)){
    // if there is no token in local storage
    if(localStorage.getItem('token') == null){
      next({
        path:'/login',
        params:{ nextUrl: to.fullPath }
      })
    // if there is a token in local storage
    } else {
      // if the route needs admin to access
      if(to.matched.some(record => record.meta.is_admin)){
        // check if user is an admin

      // if there is no need for admin access
      } else {
        next()
      }
    }
  // if no authorization is needed
  } else {
    next()
  }
})

export default router
