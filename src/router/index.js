import Vue from 'vue';
import Router from 'vue-router';
import HomeMain from '@/components/Home/Main';
import Landing from '@/components/Home/Landing';
import Visitors from '@/components/Home/Visitors';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMain,
      children: [
        {
          path: '',
          name: 'landing',
          component: Landing,
        },
        {
          path: '/visitors',
          name: 'visitors',
          component: Visitors,
        },
      ],
    },
  ],
});
