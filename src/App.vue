<script>
import AppHeader from './components/AppHeader.vue'
import BasicMap from './components/BasicMap.vue'

export default {
  name: 'BoolBnB',
  data() {
    return {}
  },
  components: { AppHeader }
}

</script>

<template>
  <!-- Header -->
  <AppHeader />
  <RouterView></RouterView>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
