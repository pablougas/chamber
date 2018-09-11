<template>
    <div>
        <app-join></app-join>
        <app-nav app/>
        <router-view />
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar from './Components/Header';
import JoinNow from './Components/JoinNow';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default {
  name: 'Main',
  data() {
    return {
      showContact: false,
    };
  },
  components: {
    appNav: Navbar,
    appJoin: JoinNow,
    appContact: Contact,
    appFooter: Footer,
  },
};
</script>

<style lang="scss">
  body {
    font-family: 'Karla', sans-serif;

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
    }
    h1 {
      font-size: 2.5em;
    }
    .text--white {
      color: white !important;
    }
    .slick-prev:before {
      color: #72ccd2;
      font-size: 30px;
      margin-left: -10px;
    }

    .slick-next:before {
      color: #72ccd2;
      font-size: 30px;
      margin-right: -10px;
    }
  }
</style>
