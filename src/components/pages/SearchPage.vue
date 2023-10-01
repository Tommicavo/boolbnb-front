<script>
import axios from 'axios';
const searchForm = {
  place: {address: '', lon: null, lat: null},
  radius: '100',
  minBeds: '1',
  minRooms: '1',
  services: {}
};
export default {
  name: 'EstateDetail',
  data() {
    return {
      form: searchForm,
      services: [],
      filteredEstates: [],
      timeoutId: null,
      suggestedAddresses: [],
      isAddressSelected: false
    }
  },
  components: {},
  props: {},
  computed: {
    isAddressFieldEmpty(){
      if (!this.form.place.address) {
        this.suggestedAddresses = [];
        return true;
      }
      return false;
    },
    filteredEstatesReady(){
      return Boolean(this.filteredEstates.length);
    },
    isFilterReset(){
      if (this.form.place.address == '' &&
      this.form.radius == '100' &&
      this.form.minRooms == '1' &&
      this.form.minBeds == '1' &&
      Object.keys(this.form.services).length === 0)
      {
        return true;
      }
      return false;
    }
  },
  methods: {
    fetchServices() {
      this.filteredEstates = [];
      const endpoint = 'http://127.0.0.1:8000/api/services';
      axios.get(endpoint)
        .then(res => {
          this.services = res.data;
          console.log('services: ', this.services);
          this.services.forEach(service => {
            this.form.services[service.label] = false;
          });
        })
        .catch(err => { console.error(err) })
    },
    sendForm() {
      this.filteredEstates = [];
      const endpoint = 'http://127.0.0.1:8000/api/services/filter';
      axios.post(endpoint, this.form)
        .then(res => {
          this.filteredEstates = res.data.withinRadiusEstates;
          console.log('Filtered Estates: ', this.filteredEstates);
          console.log(res.data);
        })
        .catch(err => { console.error(err) })
    },
    fetchAddress(address){
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
    selectPlace(address){
      this.suggestedAddresses = [];
      this.form.place.address = address.address.freeformAddress;
      this.form.place.lon = address.position.lon;
      this.form.place.lat = address.position.lat;
      this.isAddressSelected = true;
      document.getElementById('filtersBtn').removeAttribute('disabled');
      document.getElementById('searchAddress').setAttribute('readonly', 'readonly');
      // console.log(`PLACE\naddress: ${this.form.place.address}\nlon: ${this.form.place.lon}\nlat: ${this.form.place.lat}`);
    },
    resetAddress(){
      this.form.place.address = '';
      this.form.place.lon = null;
      this.form.place.lat = null;
      this.isAddressSelected = false;
      document.getElementById('filtersBtn').setAttribute('disabled', 'disabled');
      document.getElementById('searchAddress').removeAttribute('readonly');
      document.getElementById('searchAddress').focus();
    },
    printDistance(distance){
      return distance.toFixed(2);
    },
    initForm(){
      this.resetAddress();
      this.form.radius = '100';
      this.form.minRooms = '1';
      this.form.minBeds = '1';
      this.form.services = {};
    }
  },
  created() {
    this.fetchServices();
  },
  beforeRouteEnter(to, from, next){
    const callback = vm => {
      vm.form.place.address = '';
    }
    next(callback);
  }
}
</script>

<template>
  <section class="searchPage">
    <div class="container">
      <!-- Title -->
      <h2 class="mb-3">Ricerca Avanzata</h2>

      <div class="card">
        <div class="card-body">
          <!-- SearchForm -->
          <form @submit.prevent="sendForm">
            <div class="row">
              <!-- address -->
              <div class="col-6 mb-3">
                <div class="addresses">
                  <label for="searchAddress" class="form-label">Cerca un indirizzo o una città</label>
                  <div class="d-flex align-items-center position-relative">
                    <input id="searchAddress" type="text" class="form-control" placeholder="Inizia a scrivere un indirizzo"
                      v-model="form.place.address" @keyup="fetchAddress($event.target.value)">
                    <div v-if="isAddressSelected" @click="resetAddress()"><font-awesome-icon class="btn btn-danger closeIcon" icon="fa-solid fa-xmark" /></div>
                  </div>
                </div>
                <div class="suggestedAddresses">
                  <ul class="list-group">
                    <li v-for="address in suggestedAddresses" :key="address.id" @click="selectPlace(address)" class="liAddress list-group-item">
                      <div class="suggestedAddress">{{ address.address.freeformAddress }}</div>
                    </li>
                  </ul>
                </div>
              </div>
    
              <!-- radius -->
              <div class="col-2 mb-3">
                <label for="radius" class="form-label">Nel raggio di</label>
                <div class="input-group">
                  <input id="radius" type="tel" class="form-control" placeholder="Raggio" v-model="form.radius">
                  <span class="input-group-text">Km</span>
                </div>
              </div>
              <!-- min rooms -->
              <div class="col-2 mb-3">
                <label for="minRooms" class="form-label">Stanze</label>
                <input id="minRooms" type="tel" class="form-control" placeholder="Min. Stanze" v-model="form.minRooms">
              </div>
              <!-- min beds -->
              <div class="col-2 mb-3">
                <label for="minBeds" class="form-label">Camere</label>
                <input id="minBeds" type="tel" class="form-control" placeholder="Min. Camere" v-model="form.minBeds">
              </div>
              <!-- services -->
              <div  class="col-12 text-center mb-3">
                <h4 class="py-3">Seleziona i servizi che desideri</h4>
                <div v-for="service in services" :key="service.id" class="form-check form-check-inline">
                  <input :id="service.label" class="btn-check" type="checkbox" v-model="form.services[service.label]">
                  <label :for="service.label"><font-awesome-icon :class="['iconService', {'iconSelected' : form.services[service.label]}]" :icon="'fa-solid fa-' + service.icon" /></label>
                </div>
              </div>
    
              <!-- Buttons -->
              <div class="mb-3 d-flex justify-content-center align-items-center gap-3">
                <button type="button" class="btn btn-warning" @click="initForm" :disabled="isFilterReset" >Ripristina</button>
                <button id="filtersBtn" type="submit" class="btn btn-primary" disabled>Trova Alloggi</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Results -->
      <div v-if="filteredEstatesReady" class="results">
        <h2 class="my-2">Results</h2>

        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="35%">Alloggio</th>
              <th scope="col" width="10%">Stanze</th>
              <th scope="col" width="10%">Bagni</th>
              <th scope="col" width="35%">Servizi</th>
              <th scope="col" width="10%">Distanza</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="estate in filteredEstates" :key="estate.id" height="50">
              <td> {{ estate.title }} </td>
              <td> {{ estate.rooms }} </td>
              <td> {{ estate.beds }} </td>
              <td>
                <ul class="d-flex gap-2 align-items-center m-0 p-0">
                  <li class="itemService" v-for="service in estate.services" :key="service.id">
                    <font-awesome-icon class="iconService small" :icon="'fa-solid fa-' + service.icon" />
                  </li>
                </ul>
              </td>
              <td> {{ printDistance(estate.distance) }} Km</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.iconService{
  padding: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  border: 2px solid transparent;
}

.iconService.small{
  font-size: 1rem;
}

.iconSelected{
  color: #28a745;
  border: 2px solid #28a745;
  border-radius: 8px;
}

.form-label{
  font-size: 1.2rem;
  font-weight: 500;
}

.input-group-text{
  background-color: white;
}

.card-body{
  box-shadow: 5px 5px 5px 2px darkgray;
}

.filterSearchCard{
  border-radius: 1rem;
}
</style>
