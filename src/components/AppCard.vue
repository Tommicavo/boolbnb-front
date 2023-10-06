<script>
import { RouterLink } from 'vue-router';

export default {
    props: { data: Object },
    components: { RouterLink },
    computed: {
        getImagePath() {
            if (this.data.images[0]) {
                const url = this.data.images[0].url;
                return `http://127.0.0.1:8000/storage/${url}`;
            }
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="card p-0 mb-3">
            <figure>
                <img :src="getImagePath" class="card-img-top" alt="...">
            </figure>
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <div class="heart" style:> &#10084;</div>
                    <h5 class="card-title">{{ data.title }}</h5>
                    <p class="card-text">{{ data.description }}</p>
                </div>
                <!-- Show Button -->
                <RouterLink :to="{ name: 'estate-detail', params: { id: data.id } }" class="btn btn-outline-primary mx-3">
                    Dettaglio
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    cursor: pointer;
}

.heart {
    width: 10px;
    height: 15px;
    position: absolute;
    top: 5px;
    right: 15px;
    opacity: 0.45;
    fill: #FFBD59;
}

.heart:hover {
    color: #FFBD59;
    opacity: 1;
    cursor: pointer;
}

figure {
    width: 100%;
    overflow: hidden;
}

img {
    object-fit: contain;
}
</style>