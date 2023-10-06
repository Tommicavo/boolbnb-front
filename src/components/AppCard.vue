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
        },
        isEstateSponsored(){
            return this.data.endSponsor !== null;
        }
    },
    //metodo per il troncamento del testo
    methods: {
        truncateText(value, limit) {
            if (value.length > limit) {
                return value.substring(0, limit) + '...';
            }
            return value;
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="card p-0 mt-5 m-1">
            <div v-if="isEstateSponsored" class="sponsorMark">
                <font-awesome-icon icon="fa-solid fa-rectangle-ad" />
            </div>
            <figure>
                <img :src="getImagePath" class="card-img-top" alt="...">
            </figure>
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="mb-2">
                    <div class="heart" style:> &#10084;</div>
                    <h5 class="card-title">{{ data.title }}</h5>
                    <p class="card-text">{{ truncateText(data.description, 50) }}</p>
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
    overflow: hidden;
    width: 100%;

    img {
        object-fit: cover;
    }
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

.sponsorMark{
    width: 130px;
    height: 25px;
    background-color: gold;
    transform: rotate(-45deg);
    translate: -35px 15px;
    position: absolute;
    text-align: center;
    border: 2px solid black;
    font-weight: 500;
    line-height: 20px;
}
</style>