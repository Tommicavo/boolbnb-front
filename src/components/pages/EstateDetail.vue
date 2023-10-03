<script>
import axios from 'axios';
import AppCard from '@/components/AppCard.vue';
import AppLoader from '@/components/AppLoader.vue';
import DetailedAppCard from '@/components/DetailedAppCard.vue';
import ContactForm from '../ContactForm.vue';

// Api Endpoints
const baseUri = 'http://127.0.0.1:8000/api/estates/'

export default {
  name: 'estateDetail',
  components: { ContactForm, AppCard, AppLoader, DetailedAppCard },
  data() {
    return {
      estate: [],
      apiLoading: false,
      estateOk: false
    }
  },
  methods: {
    fetchEstate() {
      this.estateOk = false;
      this.apiLoading = true;
      const endpoint = `${baseUri}${this.$route.params.id}`;
      axios.get(endpoint)
        .then(res => {
          this.estate = res.data;
          this.estateOk = true;

        })
        .catch(err => { console.log(err) })
        .then(() => { this.apiLoading = false })
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
    <DetailedAppCard v-if="estateOk" :estate="estate" />
    <ContactForm :estate_id="estate.id" />
  </div>
</template>

<style scoped></style>