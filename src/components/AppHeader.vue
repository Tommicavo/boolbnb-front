<script></script>
<template>
    <header class="d-flex align-items-center justify-content-between container-fluid">
        <RouterLink class="nav-link active" :to="{ name: 'estates' }">
            <div class="flex-shrink-0 d-none d-sm-block">
                <img src="../assets/BOOLlogo.svg" alt="Logo BoolBnB" class="logo">
            </div>
        </RouterLink>

        <span class="badge d-flex align-items-center justify-content-center rounded-pill"><span id="search-icon">Ricerca
                avanzata</span><font-awesome-icon class="ms-1" :icon="['fas', 'magnifying-glass']" /></span>

        <font-awesome-icon icon="fa-solid fa-house" />


        <!--  <nav role='navigation'>
            <div id="menuToggle" class="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li>
                        <a href="http://127.0.0.1:8000/admin/estates">Area Personale</a>
                    </li>
                    <li>
                        <RouterLink class="nav-link active" :to="{ name: 'search-page' }">Ricerca Avanzata</RouterLink>
                    </li>
                </ul>
            </div>
        </nav> -->
    </header>
</template>
<style scoped lang="scss">
@use'../assets/scss/partials/vars.scss';

a {
    text-decoration: none;

    transition: color 0.3s ease;
}


.badge:hover {
    background-color: #FF9C2E;
    cursor: pointer;
    transition: background-color 0.5s ease;
    width: 190px;
    transition: width 0.5s ease;


    #search-icon {
        display: block;
        transition: display 0.5s ease;
    }

}

#search-icon {
    display: none;
}

.badge {
    width: 40px;
    height: 40px;
    color: #213644;
    font-size: 1.2rem;
    background-color: #FFBD59;
    transition: width 0.5s ease;
}



@media screen and (max-width: 768px) {}




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


.nav1 {
    color: #213644;
    font-size: 1.2rem;
}
</style>