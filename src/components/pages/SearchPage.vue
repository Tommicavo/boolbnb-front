<script>
import axios from 'axios';
const searchForm = { title: '', minBed: '1', minRoom: '1', services: {} };
export default {
  name: 'EstateDetail',
  data() {
    return { form: searchForm, services: [] }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    fetchServices() {
      // this.apiLoading = true;
      const endpoint = 'http://127.0.0.1:8000/api/services/';
      axios.get(endpoint)
        .then(res => {
          this.services = res.data;
          this.services.forEach(service => {
            this.form.services[service.label] = false;
          });

          console.log(this.services);
          console.log(this.form.services);
        })
        .catch(err => { console.log(err) })
      // .then(() => { })
    },
    sendForm() {
      const endpoint = 'http://127.0.0.1:8000/api/services/filter';
      axios.post(endpoint, this.form)
        .then(res => {
          this.form = res.data;
          console.log(this.form)
        })
        .catch(err => { console.log(err) })
    }

  },
  created() {
    this.fetchServices();

  }
}
</script>

<template>
  <section class="container">
    <h1 class="my-4">Search Page</h1>
    <form class="row gy-2 gx-3 align-items-center" @submit.prevent="sendForm">
      <div class="col-auto">
        <label class="visually-hidden">Stanze</label>
        <input type="tel" class="form-control" placeholder="n stanze" v-model="form.minRoom">
      </div>
      <div class="col-auto">
        <label class="visually-hidden">Letti</label>
        <div class="input-group">
          <input type="tel" class="form-control" placeholder="n letti" v-model="form.minBed">
        </div>
      </div>
      <div class="col-auto">
        <div class="d-flex justify-content-start">
          <div class="form-check form-check-inline" v-for="service in services" :key="service.label">
            <input class="form-check-input" type="checkbox" v-model="form.services[service.label]">
            <label class="form-check-label" for="">{{ service.label }}</label>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>