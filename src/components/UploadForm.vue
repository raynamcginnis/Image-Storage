<template>
<div class="dropper">
    <input type="file"
    @change="uploadImages($event.target.files)"
    multiple
    accept="image/*"
    />
    <span> Drag Files Here!</span>
    </div>
    </template>
    
    <script>
    import { mapActions } from 'vuex';

    export default {
            name: 'UploadForm', 
            methods: mapActions(['uploadImages'])
        };
    </script>

    <style scoped>
        .dropper {
            height: 30vh;
            border: 2px dashed darkgrey;
            border-radius: 10px;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .dropper:hover {
            background: #eee;
        }

        input {
            width: 100%;
            height: 30vh;
            position: absolute;
            opacity: 0;
        }
    </style>