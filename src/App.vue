<template>
<div>
    <!-- menu bar -->
    <AppHeader></AppHeader>
     <div class="ui container">
    <!-- whenever the browser matches a route, it displays it here-->
    <router-view></router-view>
    </div>
</div>
</template>

<script>

import AppHeader from './components/AppHeader';
export default {
    name: 'App',
    components: {
        AppHeader
        }
    };
    </script>

