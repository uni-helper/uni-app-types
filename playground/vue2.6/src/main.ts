import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import UniCompositionAPI from 'uni-composition-api';
import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.use(UniCompositionAPI);
Vue.config.productionTip = false;

// @ts-ignore
App.mpType = 'app';

const app = new Vue({
  ...App,
});

app.$mount();
