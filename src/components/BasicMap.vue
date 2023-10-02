<script>
export default {
    data() {
        return {
            map: null
        };
    },
    props: {
        estate: Object
    },
    methods: {
        setMap(){
            this.map = tt.map({
                key: 'M67vYPGoqcGCwsgAOqnQFq8m8VRJHYoW',
                container: 'map-div',
                center: {lat: parseFloat(this.estate.latitude), lon: parseFloat(this.estate.longitude)},
                zoom: 12
            });
        }
    },
    mounted() {
        this.setMap();
    }
}

</script>

<template>
    <div class="addressCard">
        <div class="card-header">
            <span><strong>Indirizzo: </strong></span>
            <span>{{ estate.address }} - ({{ estate.longitude }}, {{ estate.latitude }})</span>
        </div>
        <div class="card-body">
            <div id="map-div"></div>
        </div>
    </div>
</template>


<style>
#map-div {
    width: 600px;
    height: 400px;
    border: 0;
    border-radius: 1rem;
}
</style>