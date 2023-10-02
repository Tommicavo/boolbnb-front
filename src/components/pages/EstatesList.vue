<script>
import axios from 'axios';
import AppCard from '@/components/AppCard.vue';
import AppLoader from '@/components/AppLoader.vue';

const searchForm = {
    place: { address: '', lon: null, lat: null },
    radius: '20',
};

// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/estates/'

export default {
    components: { AppCard, AppLoader },
    data() {
        return {
            form: searchForm,
            suggestedAddresses: [],
            isAddressSelected: false,
            estates: [],
            apiLoading: false,
            timeoutId: null,
        }
    },
    computed: {
        isAddressFieldEmpty() {
            if (!this.form.place.address) {
                this.suggestedAddresses = [];
                return true;
            }
            return false;
        },

    },
    methods: {
        sendForm() {
            this.estates = [];
            const endpoint = 'http://127.0.0.1:8000/api/services/filter';
            axios.post(endpoint, this.form)
                .then(res => {
                    this.estates = res.data.withinRadiusEstates;
                    console.log('Filtered Estates: ', this.estates);
                    console.log(res.data);
                })
                .catch(err => { console.error(err) })
        },
        fetchAddress(address) {
            const baseUri = 'https://api.tomtom.com/search/2/search/';
            const params = '.json?limit=5&countrySet=IT';
            const apiKey = '&key=GhG6A9t2m9I7jUfG0xLAixmH1Nk7leZa';

            if (this.isAddressFieldEmpty || this.isAddressSelected) return;

            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                const endpoint = `${baseUri}${address}${params}${apiKey}`;
                this.suggestedAddresses = [];
                // console.log(endpoint);

                axios.get(endpoint)
                    .then(res => {
                        const results = res.data.results;
                        // console.log('results: ', results);
                        results.forEach(result => {
                            // console.log('result: ', result.address.freeformAddress);
                            this.suggestedAddresses.push(result);
                        })
                    })
            }, 500);
        },
        selectPlace(address) {
            this.suggestedAddresses = [];
            this.form.place.address = address.address.freeformAddress;
            this.form.place.lon = address.position.lon;
            this.form.place.lat = address.position.lat;
            this.isAddressSelected = true;
            document.getElementById('filtersBtn').removeAttribute('disabled');
            document.getElementById('searchAddress').setAttribute('readonly', 'readonly');
            // console.log(`PLACE\naddress: ${this.form.place.address}\nlon: ${this.form.place.lon}\nlat: ${this.form.place.lat}`);
        },
        fetchestates(baseEndpoint = 'http://127.0.0.1:8000/api/estates/') {
            this.apiLoading = true;
            axios.get(baseEndpoint)
                .then(res => {
                    this.estates = res.data.results;
                    console.log(this.estates)
                })
                .catch(err => { console.log(err) })
                .then(() => { this.apiLoading = false })
        },

        resetAddress() {
            this.form.place.address = '';
            this.form.place.lon = null;
            this.form.place.lat = null;
            this.isAddressSelected = false;
            document.getElementById('filtersBtn').setAttribute('disabled', 'disabled');
            document.getElementById('searchAddress').removeAttribute('readonly');
            document.getElementById('searchAddress').focus();
        },
        initForm() {
            this.resetAddress();
            this.form.radius = '20';
        },
    },
    created() {
        this.fetchestates();
    },
    beforeRouteEnter(to, from, next) {
        const callback = vm => {
            vm.form.place.address = '';
        }
        next(callback);
    }
}
</script>

<template>
    <AppLoader v-if="apiLoading" />
    <main v-else class="container">

        <div class="container">

            <!--  <SearchForm @sendForm="sendForm" /> -->

            <form @submit.prevent="sendForm">

                <!-- search address -->
                <div class="row ">
                    <div class="addresses my-3 col-10">
                        <div class="d-flex align-items-center position-relative">
                            <input id="searchAddress" type="text" class="form-control"
                                placeholder="Scegli un indirizzo da cercare" v-model="form.place.address"
                                @keyup="fetchAddress($event.target.value)">
                            <div v-if="isAddressSelected" @click="resetAddress()"><font-awesome-icon
                                    class="btn btn-danger closeIcon" icon="fa-solid fa-xmark" />
                            </div>
                        </div>
                    </div>
                    <button id="filtersBtn" type="submit" class="my-3 col-2 btn btn-primary " disabled>Trova
                        Alloggi</button>
                    <div class="suggestedAddresses">
                        <ul class="list-group">
                            <li v-for="address in suggestedAddresses" :key="address.id" @click="selectPlace(address)"
                                class="liAddress list-group-item">
                                <div class="suggestedAddress">{{ address.address.freeformAddress }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--   <div class="mb-3 d-flex justify-content-center align-items-center gap-3 col-1"> -->




            </form>


            <!-- Hide if empty -->
            <div v-if="estates.length" class="row">

                <!-- Dynamic Card Here -->
                <AppCard v-for="estate in estates" :key="estate.id" :data="estate" />

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