import '@babel/polyfill';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import sgMail from '@sendgrid/mail';
import VueTyperPlugin from 'vue-typer';
import Vue from 'vue';
import App from './App';
import router from './router';
import './plugins/vuetify';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

Vue.use(sgMail);
Vue.use(VueTyperPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
