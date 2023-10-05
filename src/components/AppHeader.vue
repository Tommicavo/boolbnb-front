<script></script>
<template>
    <header class="d-flex align-items-center justify-content-between container-fluid">
        <div class="flex-shrink-0 d-none d-sm-block">
            <img src="../assets/BOOLlogo.svg" alt="Logo BoolBnB" class="logo">
        </div>
        <nav class="flex-grow-1 ms-4 ms-sm-0 mt-5">
            <ul class="me-auto nav1 d-flex gap-4">
                <li>
                    <RouterLink class="nav-link active a1" :to="{ name: 'estates' }">Annunci</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link active" :to="{ name: 'search-page' }">Ricerca Avanzata</RouterLink>
                </li>
            </ul>
        </nav>
        <nav role='navigation'>
            <div id="menuToggle" class="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="http://127.0.0.1:8000/register">
                        <li class="hamburger_li">Registrati</li>
                    </a>
                    <a href="http://127.0.0.1:8000/login">
                        <li class="hamburger_li">Accedi</li>
                    </a>
                </ul>
            </div>
        </nav>
    </header>
</template>
<style scoped lang="scss">
@use'../assets/scss/partials/vars.scss';

.hamburger {
    margin-bottom: 20px;

}

header {

    height: 80px;
    font-weight: bold;
}

.research {
    margin-left: 25px;
    transition: color 0.3s ease;
    cursor: pointer;
}

.research:hover {
    color: #FFBD59;
}

.logo {
    max-height: 330px;
    margin: 15px -70px 0 -70px
}

ul {
    padding: 0;

}


.nav1 {
    color: #213644;
    font-size: 1.2rem;
}
</style>