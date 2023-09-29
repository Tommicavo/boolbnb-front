<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['term-change', 'form-submit']
}
</script>

<template>
    <form @submit.prevent="$emit('form-submit')">
        <div class="input-group my-3">
            <input type="text" class="form-control" placeholder="Cerca annuncio" aria-describedby="button-addon2"
                v-model.trim="searchTerm" @keyup="$emit('term-change', searchTerm)">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
        </div>
    </form>
</template>


<style></style>