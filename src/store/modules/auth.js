import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';

const state = {
    // checks to see if token already exists
        token: window.localStorage.getItem('imgur_token')
}; 

const getters = {
    // returns current state of token as a boolean
isLoggedIn: state => !!state.token
}; 

const actions = {
    // call api login function when login is called
    login: () => {
        api.login();
    },
    // extracts token from url and applies token to current token
    finalizeLogin: ({commit}, hash) => {
        // parse the token out of the hash string
         const query = qs.parse(hash.replace('#', ''));
        // update state of token
         commit('setToken', query.access_token);  
         window.localStorage.setItem('imgur_token', query.access_token);

         // returns back to main URL after authentication is complete
         router.push('/');
     },
    // when logout is clicked, set token back to null
    // we use commit to call a mutation
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
        router.push('/')
    }
    

};

const mutations = {
    // set token to whatever the current state of token is
    // state is always the first argument of a mutation
    setToken: (state, token) => {
        state.token = token;
    }
};

// export all objects
export default {
    state, 
    getters,
    actions,
    mutations
};