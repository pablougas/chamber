import Vue from 'vue';
import Router from 'vue-router';
import HomeMain from '@/components/Home/Main';
import Visitors from '@/components/Home/Visitors';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMain,
    },
    {
      path: '/visitors',
      name: 'visitors',
      component: Visitors,
    },
  ],
});
