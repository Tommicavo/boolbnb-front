<script>
import { RouterLink } from 'vue-router';

export default {
    props: { data: Object, isDetail: Boolean },
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
    <div class="card m-3 text-bg-dark" :class="[isDetail ? 'col-12' : 'col-2']">

        <img :src="getImagePath" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">{{ data.title }}</h5>
                <p class="card-text">{{ data.description }}</p>
            </div>

            <!-- Show Button -->
            <RouterLink v-if="!isDetail" :to="{ name: 'estate-detail', params: { id: data.id } }"
                class="btn btn-outline-primary mx-3">Dettaglio
            </RouterLink>

        </div>
    </div>
</template>

<style></style>