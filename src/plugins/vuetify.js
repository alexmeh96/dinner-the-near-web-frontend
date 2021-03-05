import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



Vue.use(Vuetify);

export default new Vuetify({

  theme: {
    themes: {
      light: {
        primary: '#e20074',
        secondary: '#6c757d',
        accent: '#3ea2fb',
        error: '#dc3545',
        petrol: '#17a499',
        background: '#E1F5FE',
      }
    },
    options: {
      customProperties: true
    },
  },
});
