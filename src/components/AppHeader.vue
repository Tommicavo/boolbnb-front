<script></script>
<template>
    <header class="d-flex align-items-center justify-content-center">

        <nav class="container">


            <ul class="me-auto mb-2 mb-lg-0 nav1 d-flex align-items-center ">
                <img src="../assets/assets/BOOLlogo.svg" alt="Logo BoolBnB" class="logo">
                <li>
                    <RouterLink class="nav-link active a1" :to="{ name: 'estates' }">Annunci</RouterLink>
                </li>


            </ul>
            <nav role='navigation'>
                <div id="menuToggle" class="hamburger">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>


                    <ul id="menu">
                        <a href="#">
                            <li class="hamburger_li">Registrati</li>
                        </a>
                        <a href="#">
                            <li class="hamburger_li">Accedi</li>
                        </a>
                        <a href="#">
                            <li class="hamburger_li">Affitta con BoolBnb</li>
                        </a>

                    </ul>
                </div>
            </nav>
        </nav>

    </header>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/_vars.scss' as *;

.hamburger {
    margin-bottom: 20px;

}

header {

    height: 80px;
    font-weight: bold;
}

.a1 {
    margin-left: 25px;
}



.logo {
    max-height: 330px;
    margin-left: -85px;
    margin-top: 15px;
}

ul {
    padding: 0;

}

.nav1 {
    color: #213644;
    font-size: 1.4rem;
    ;
}
</style>