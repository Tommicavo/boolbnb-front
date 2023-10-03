<script>
export default {
    name: 'ContactForm',
}
</script>


<template>
    <h2 class="mt-5">Contatta il proprietario</h2>
    <div class="card mt-4">
        <div class="card-body">
            <form action="">
                <div class="row d-flex justify-content-end">
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="email" class="form-label"><strong>Email</strong></label>
                            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="name" class="form-label"><strong>Nome</strong></label>
                            <input type="text" class="form-control" id="name" name="name">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="text" class="form-label"><strong>Messaggio</strong></label>
                            <textarea class="form-control" id="text" rows="5"></textarea>
                        </div>

                    </div>
                    <button type="button" class="btn btn-success">invia</button>

                </div>
            </form>
        </div>
    </div>
</template>



<style scoped>
.btn {
    width: 100px;
    margin-right: 1rem;
}
</style>