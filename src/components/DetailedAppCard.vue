<script>

import BasicMap from '@/components/BasicMap.vue';

export default {
    name: 'DetailedAppCard',
    data() {
        return {}
    },
    components: {
        BasicMap
    },
    props: {
        estate: Object
    },
    computed: {

    },
    methods: {
        getImagePath(image) {
            const url = image.url;
            return `http://127.0.0.1:8000/storage/${url}`;
        }
    },
    created() {
        console.log();
    }
}
</script>

<template>
    <div v-if="estate" class="card mt-3">
        <div class="card-header text-center">
            HomePage - Prev - Next
        </div>
        <!-- images carousel -->
        <div v-if="estate.images" id="imagesCarousel" class="carousel slide my-2">
            <div class="carousel-inner">
                <div v-for="image in estate.images" :key="image.id" class="carousel-item"
                    :class="estate.images[0].id == image.id ? 'active' : ''">
                    <img :src="getImagePath(image)" class="estateImg d-block" alt="">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#imagesCarousel" data-bs-slide="prev">
                <span :class="{ 'd-none': estate.images }" class="btn btn-primary"><font-awesome-icon
                        icon="fa-solid fa-backward" /></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#imagesCarousel" data-bs-slide="next">
                <span :class="{ 'd-none': estate.images }" class="btn btn-primary"><font-awesome-icon
                        icon="fa-solid fa-forward" /></span>
            </button>
        </div>

        <div class="card-body">
            <!-- title -->
            <div class="estateTitle">
                <h2 class="text-center py-2">{{ estate.title }}</h2>
            </div>

            <!-- address -->
            <div class="addressCard">
                <BasicMap :estate="estate" />
            </div>

            <!-- description -->
            <div class="estateDescription">
                <div><strong>Descrizione</strong></div>
                <p>{{ estate.description }}</p>
            </div>

            <!-- services -->
            <div v-if="estate.services" class="estateServices d-flex align-items-center">
                <span><strong>Servizi: </strong></span>
                <span v-for="service in estate.services" :key="service.id">
                    <font-awesome-icon class="iconService" :icon="'fa-solid fa-' + service.icon" />
                </span>
            </div>

            <div class="estateInfo row">
                <div class="">
                    <span><strong>Stanze</strong></span>
                    <span>: {{ estate.rooms }}</span>
                </div>
                <div class="">
                    <span><strong>Camere</strong></span>
                    <span>: {{ estate.beds }}</span>
                </div>
                <div class="">
                    <span><strong>Bagni</strong></span>
                    <span>: {{ estate.bathrooms }}</span>
                </div>
                <div class="">
                    <span><strong>Superficie</strong></span>
                    <span>: {{ estate.mq }} m<sup><small>2</small></sup></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/partials/vars' as *;

#imagesCarousel .btn.btn-primary {
    font-size: 1.5rem;
    font-weight: bold;
    color: $logo-color;
    background-color: $bg-lightgrey;
    border: 1px solid $logo-color;
    opacity: 0.5;
}

#imagesCarousel .carousel-control-next:hover .btn.btn-primary,
#imagesCarousel .carousel-control-prev:hover .btn.btn-primary {
    opacity: 1;
}

.estateImg {
    min-width: 420px;
    max-width: 100%;
    height: 500px;
    margin: 0 auto;
}

.iconService {
    padding: 10px;
    font-size: 1.6rem;
    font-weight: 500;
    border: 2px solid transparent;
}

.card-body>* {
    padding-bottom: 0.5rem;
}
</style>
