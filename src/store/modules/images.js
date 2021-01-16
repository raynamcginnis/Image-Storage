import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    // images is originally an empty array
 images: []
};

const getters = {
 allImages: state => state.images
}; 

const actions = {
    //rootState gives ability to reach into other modules to access state inside of them
    async fetchImages( {rootState, commit}) {
        const {token} = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    }, 
    async uploadImages({rootState}, images) {
        // Get the access token
        const {token} = rootState.auth;

        // call our API module to upload images
        await api.uploadImages(images, token);

        // after upload, redirect user to gallery to see uploaded images
        router.push('/');
    }
    
}; 

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

// export all objects
export default {
    state, 
    getters,
    actions,
    mutations
};
