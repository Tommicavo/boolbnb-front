<script>

export default {
  name: 'DetailedAppCard',
  data() {
    return {}
  },
  components: {},
  props: {
    estate: Object
  },
  computed: {

    },
  methods: {
    getImagePath(image){
        const url = image.url;
        return `http://127.0.0.1:8000/storage/${url}`;
    },
    initVisibility(){

    }
  },
  created(){
    this.initVisibility();
  }
}
</script>

<template>
    <div class="card">
    <div v-if="estate.images" id="imagesCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="image in estate.images" :key="image.id" class="carousel-item" :class="estate.images[0].id == image.id ? 'active' : ''">
                <img :src="getImagePath(image)" class="estateImg d-block" alt="">
            </div>
        </div>
        <button class="carousel-control-prev text-dark" type="button" data-bs-target="#imagesCarousel" data-bs-slide="prev">
            <span class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-backward" /></span>
        </button>
        <button class="carousel-control-next text-dark" type="button" data-bs-target="#imagesCarousel" data-bs-slide="next">
            <span class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-forward" /></span>
        </button>
    </div>

    <div class="card-body">
        <h5 class="estateTitle">{{ estate.title }}</h5>
        <p class="estateDescription">{{ estate.description }}</p>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/partials/vars' as *;
#imagesCarousel .btn.btn-primary{
    font-size: 1.5rem;
    font-weight: bold;
    color: $logo-color;
    background-color: $bg-lightgrey;
    border: 1px solid $logo-color;
    opacity: 0.5;
}

#imagesCarousel .carousel-control-next:hover .btn.btn-primary,
#imagesCarousel .carousel-control-prev:hover .btn.btn-primary
{
    opacity: 1;
}

.estateImg{
    max-width: 800px;
    height: 500px;
    margin: 0 auto;
}

</style>
