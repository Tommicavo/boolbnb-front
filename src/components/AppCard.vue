<script>
import { RouterLink } from 'vue-router';

export default {
    props: { data: Object, isDetail: Boolean },
    components: { RouterLink }
}
</script>

<template>
    <div class="card col-12 m-3 text-bg-dark">

        <!-- !SET IMAGE -->
        <!-- <img :src="data.url" class="card-img-top" alt="..."> -->
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">{{ data.title }}</h5>
                <p class="card-text">{{ data.description }}</p>
            </div>

            <!-- !ACTIVATE AFTER SHOW COMPLETED -->

            <!-- Show Button -->
            <!-- <RouterLink v-if="!isDetail" :to="{ name: 'estate-detail', params: { id: data.id } }"
                class="btn btn-outline-primary mx-3">
                <i class="fa-solid fa-eye"></i>
            </RouterLink> -->

        </div>
    </div>
</template>

<style></style>