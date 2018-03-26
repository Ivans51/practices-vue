import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index';
import Home from '@/components/home/Home';
import Community from '@/components/Community';
import Learn from '@/components/Learn';
import Search from '@/components/search/Search';
import Try from '@/components/try/Try';
// const Home = r => require.ensure([], () => r(require('@/components/home/Home')), 'grupo-SuperSu')
const Error404 = r => require.ensure([], () => r(require('@/components/Error404')), 'grupo-SuperSu')

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: 'Home',
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home,
          redirect: '/Home/Community',
          children: [
            {
              path: 'Community',
              name: 'Community',
              component: Community
            },
            {
              path: 'Learn',
              name: 'Learn',
              component: Learn
            },
            {
              path: 'Search',
              name: 'Search',
              component: Search
            },
            {
              path: 'Try',
              name: 'Try',
              component: Try
            }
          ]
        }
      ]
    },
    {path: '*', name: 'Error Server', component: Error404}
  ]
})
