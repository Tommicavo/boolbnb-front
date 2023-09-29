<script></script>
<template>
    <header class="d-flex align-items-center justify-content-center">

        <nav class="container">


            <ul class="me-auto mb-2 mb-lg-0 nav1 d-flex align-items-center ">
                <img src="../assets/assets/BOOLlogo.svg" alt="Logo BoolBnB" class="logo">
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
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 0.9920343137254902) 0%, rgba(9, 79, 121, 1) 32%, rgba(105, 223, 247, 1) 89%);
    height: 80px;
}

.nav1 {
    color: #ffffff;
    font-size: 1.4rem;
    border-radius: 1px solid white;
    ;
}

.logo {
    max-height: 330px;
    margin-left: -85px;
    margin-top: 15px;
}

ul {
    padding: 0;
}
</style>