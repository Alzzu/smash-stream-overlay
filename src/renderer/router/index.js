import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front',
      component: require('@/components/Main').default
    },
    {
      path: '/queue',
      name: 'stream-queue',
      component: require('@/components/Queue').default
    },
    {
      path: '/tournament',
      name: 'tournament-settings',
      component: require('@/components/Tournament').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
