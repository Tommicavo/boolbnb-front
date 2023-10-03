<script></script>

<template>
    <div class="container row-cols-4 mt-5 shrink">
        <div class="d-flex">
            <div v-for="n in 10" class="cardGray d-flex flex-column justify-content-center p-3 me-3">
                <div class="imageGray"></div>
                <div class="titleGray"></div>
                <div class="titleGray"></div>
                <div class="titleGray"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardGray {
    background-color: lightgray;
    border-radius: 8px;

    .imageGray {
        height: 80px;
        width: 180px;
        background-color: rgb(172, 171, 170);
        border-radius: 8px;
    }

    .titleGray {
        height: 20px;
        width: 80%;
        margin-top: 10px;
        background-color: rgb(172, 171, 170);
        border-radius: 8px;
    }

}
</style>