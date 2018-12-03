//ToDo: Import vue and name it Vue********
//ToDo: Import vue-router and name it VueRouter**********
//ToDo: Import vue-resource and name it VueResource*******
//ToDo: Import App.vue and name it App*********
//ToDo: Import routes.js and use the {} passing routes*********
//ToDo: Import store/store.js and name it store*******

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from "routes.js";
import { store } from './store/store.js';

//ToDo Initialize VueRouter using Vue.use()**********
Vue.use(VueRouter);
//ToDo Initialize VueResource using Vue.use()*********
Vue.use(VueResource);

Vue.http.options.root = //ToDo: Set Equal to your Firebase Database URL

Vue.filter('currency', (value) => {
  //ToDo: Return value.toLocalString(), Add $ sign before the value
});

const router = new VueRouter({
    //ToDo: Set router mode to history***********
    routes,
    mode: 'history',
    //ToDo: Pass routes constant imported from above*********
});

new Vue({
  el: '#app',
    //ToDo: Pass the router constant to vue application *********
    //ToDo: Pass store constant to vue application *********
    router,
    store,
  render: h => h(App)
})
