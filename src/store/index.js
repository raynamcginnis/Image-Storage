import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

// allows Vuex to talk to Vue
Vue.use(Vuex);

// store is an overall collection of the modules, getters, actions, mutations
export default new Vuex.Store({
    modules: {
        auth,
        images
    }  
});