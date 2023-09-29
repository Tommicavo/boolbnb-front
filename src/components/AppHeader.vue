<script></script>
<template>
    <header class="d-flex align-items-center justify-content-center">
        <nav class="container">
            <ul class="me-auto mb-2 mb-lg-0 ">
                <li>
                    <RouterLink class="nav-link active" :to="{ name: 'estates' }">Annunci</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/_vars.scss' as *;

header {
    background-color: $bg-lightgrey;
    height: 80px;
}
</style>