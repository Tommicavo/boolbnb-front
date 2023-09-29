<script>
export default {
    data() {
        return {
            coordinates: { lat: 41.89462149736088, lng: 12.494100927284844 },
            map: null
        };
    },
    mounted() {
        this.map = tt.map({
            key: 'M67vYPGoqcGCwsgAOqnQFq8m8VRJHYoW',
            container: 'map-div',
            center: this.coordinates,
            zoom: 12
        });
    }
}

</script>


<template>
    <div id="map-div"></div>
</template>


<style>
#map-div {
    width: 600px;
    height: 400px;
    border: 5px solid #fff;
    border-radius: 10px;
}
</style>