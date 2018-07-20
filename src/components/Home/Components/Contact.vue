<template>
  <v-container fluid>

  </v-container>
</template>

<script>
import sgMail from '@sendgrid/mail';

export default {
  name: 'Contact',
  mounted () {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'pablo@sky9.us',
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere',
      html: '<strong>even with Vue.js</strong>',
    };
    sgMail.send(msg)
      .then(res => console.log(res))
  }
};
</script>

<style scoped lang="scss">
  .container {
    background-color: white;
    height: 400px;
  }
</style>
