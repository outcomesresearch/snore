import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import locales from '../assets/locales/';

Vue.use(Vuetify);

const opts = {
  lang: {
    locales,
    current: 'en_us',
  },
  theme: {
    themes: {
      light: {
        primary: '#a51417',
      },
    },
  },
};
export default new Vuetify(opts);
