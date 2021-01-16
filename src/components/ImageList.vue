<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link" :key="image.id"  />
    </div>
    <h2 v-else>Log in to get started!</h2>
    </div>
</template>

<script>

        import { mapActions, mapGetters} from 'vuex';
        export default {
            name: 'ImageList',
            computed: mapGetters(['allImages', 'isLoggedIn']),
            methods: mapActions(['fetchImages']),
            // calls fetch images 
            created() {
                this.fetchImages();
            }
        };
    </script>

    <style scoped>
        .image-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: masonry;
            gap: 10px;

        }

        img {
            max-width: 100%;
            padding: 5px;
        }
        h2 {
            text-align: center;
            padding: 15px;
        }
    </style>