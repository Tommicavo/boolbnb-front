<script>
import axios from 'axios';
import AppCard from '@/components/AppCard.vue';
import AppLoader from '@/components/AppLoader.vue';


// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/estates/'

export default {
  name: 'estateDetail',
  components: { AppCard, AppLoader },
  data() {
    return {
      estate: [],
      apiLoading: false
    }
  },
  methods: {
    getEstate(baseEndpoint = 'http://127.0.0.1:8000/api/estates/') {
      this.apiLoading = true;
      axios.get(baseEndpoint + `${this.$route.params.id}`)
        .then(res => {
          this.estate = res.data;
        })
        .catch(err => { console.log(err) })
        .then(() => { this.apiLoading = false })
    }
  },
  created() {
    this.getEstate();
  }
};
</script>

<template>
  <div class="container">
    <AppLoader v-if="apiLoading" />
    <AppCard v-else :data="estate" :isDetail="true" />
  </div>
</template>

<style scoped></style>