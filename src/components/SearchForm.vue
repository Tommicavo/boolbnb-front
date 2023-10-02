<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['term-change', 'sendForm']
}
</script>

<template>
    <form @submit.prevent="$emit('sendForm')">
        <div class="input-group my-3">
            <input type="text" class="form-control" placeholder="Cerca annuncio" aria-describedby="button-addon2"
                v-model.trim="searchTerm" @keyup="$emit('term-change', searchTerm)">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Cerca</button>
        </div>
    </form>
</template>


<style></style>