<script>
import axios from 'axios';
import AppCard from '../AppCard.vue';
import AppLoader from '../AppLoader.vue';

// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/estates/'

export default {
    components: { AppCard, AppLoader },
    data() {
        return {
            estates: [],
            apiLoading: false
        }
    },
    methods: {
        fetchestates(baseEndpoint = 'http://127.0.0.1:8000/api/estates/') {
            this.apiLoading = true;
            axios.get(baseEndpoint)
                .then(res => {
                    const { data, links } = res.data;
                    this.estates = { data, links };
                })
                .catch(err => { console.log(err) })
                .then(() => { this.apiLoading = false })
        }
    },
    created() {
        this.fetchestates();
    }
}
</script>

<template>
    <AppLoader v-if="apiLoading" />
    <main v-else class="container">

        <div class="container">
            <!-- Hide if empty -->
            <div v-if="estates.data.length" class="row">

                <!-- Dynamic Card Here -->
                <AppCard v-for="estate in estates.data" :key="estate.id" :data="estate" />

                <!-- Pagination Navbar -->
                <!-- <nav>
                    <ul class="pagination">
                        <li v-for="element in estates.links" :key="element.label" class="page-item">
                            <button :disabled="!element.url" :class="{ active: element.active }" class="page-link"
                                v-html="element.label" @click="fetchestates(element.url)"></button>
                        </li>
                    </ul>
                </nav> -->

            </div>

            <div v-else class="d-flex justify-content-center align-items-center mt-3">
                <h1>Non ci sono progetti da visualizzare</h1>
            </div>
        </div>


    </main>
</template>

<style></style>