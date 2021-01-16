import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';

Vue.use(VueRouter);

export const router = new VueRouter({
    // removes # from url
    mode: 'history',
    routes: [
        { path: '/oauth/callback', component: AuthHandler }, 
        { path: '/upload', component: UploadForm}, 
        { path: '/', component: ImageList}
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');