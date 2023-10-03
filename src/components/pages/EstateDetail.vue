<script>
import axios from 'axios';
import AppCard from '@/components/AppCard.vue';
import AppLoader from '@/components/AppLoader.vue';
import DetailedAppCard from '@/components/DetailedAppCard.vue';

// Api Endpoints
const baseUri = 'http://127.0.0.1:8000/api/estates/'

export default {
  name: 'estateDetail',
  components: { AppCard, AppLoader, DetailedAppCard },
  data() {
    return {
      estate: [],
      apiLoading: false,
      estateOk: false
    }
  },
  methods: {
    async fetchEstate(endpoint=`${baseUri}${this.$route.params.id}`) {
      this.estateOk = false;
      this.apiLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.estate = res.data;
          console.log('ESTATE: ', this.estate);
          this.estateOk = true;

        })
        .catch(err => { console.log(err) })
        .then(() => { this.apiLoading = false })
    },
    async fetchNewEstate(newId){
      const endpoint = `${baseUri}${newId}`;
      await this.fetchEstate(endpoint);
      this.$router.push({name: 'estate-detail', params: {id: newId}});
    }
  },
  created() {
    this.fetchEstate();
  }
};
</script>

<template>
  <div class="container">
    <AppLoader v-if="apiLoading" />
    <DetailedAppCard v-if="estateOk" :estate="estate" @newEstate="fetchNewEstate"/>
  </div>
</template>

<style scoped></style>