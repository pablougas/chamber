<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition">
      <v-btn
        v-show="!dialog"
        class="signup-activator"
        slot="activator"
        fixed
        right
        color="light-blue accent-4"
        dark>
        Join Now
      </v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Puyallup Sumner Chamber Registration</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Submit</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-subheader inset>Business Information</v-subheader>
          <v-layout column class="mb-5">
            <v-flex xs12>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12 class="pa-3">
                    <v-text-field
                      v-model="business.name"
                      :rules="nameRules"
                      :counter="10"
                      label="Business Name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4 xl3 class="pa-3">
                    <v-text-field
                      v-model="business.street"
                      label="Street"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3 xl3 class="pa-3">
                    <v-text-field
                      v-model="business.city"
                      label="City"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md2 xl3 class="pa-3">
                    <v-select
                      v-model="business.state"
                      :items="items"
                      :rules="[v => !!v || 'Item is required']"
                      label="State"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md3 xl3 class="pa-3">
                    <v-text-field
                      v-model="business.zip"
                      label="Zip"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="pa-3">
                    <v-checkbox
                      v-model="terms"
                      :rules="[v => !!v || 'You must agree to continue!']"
                      label="Do you agree?"
                      required
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn
                      block
                      :disabled="!valid"
                      @click="submit"
                    >
                      submit
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout column class="mb-5">
            <v-flex xs12>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md4 xl3 class="pa-3">
                    <v-text-field
                      v-model="contact.name"
                      :rules="nameRules"
                      :counter="10"
                      label="Business Name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4 xl3 class="pa-3">
                    <v-text-field
                      v-model="contact.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JoinNow',
  data() {
    return {
      valid: true,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: ['Washington'],
      business: {
        name: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
      },
      contact: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        position: '',
      },
      terms: false,
      nameRules: [
		    v => !!v || 'Name is required',
		    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
	    ],
	    emailRules: [
		    v => !!v || 'E-mail is required',
		    v => /.+@.+/.test(v) || 'E-mail must be valid',
	    ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox,
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped lang="scss">

  .signup-activator {
    top: 270px;
    width: 120px;
    margin-right: -95px;
    border-radius: 5px 5px 0 0;
    height: auto;
    padding: 12px 12px 5px;
    font-size: 18px;
    font-weight: 500;
    z-index: 99999999;
    transform: rotate(-90deg) !important;
    transform-origin: left top 0 !important;
  }
</style>
