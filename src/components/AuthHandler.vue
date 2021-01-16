<template>
    <div> 
    Please wait....
    </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        // call finalizeLogin once Authorization is complete
        this.finalizeLogin(window.location.hash);
    }
};
    </script>