<script>
import axios from 'axios';
const baseUri = 'http://127.0.0.1:8000/api/messages';
export default {
    name: 'ContactForm',

    data() {
        return {
            form: {
                email: '',
                name: '',
                text: '',
                estate_id: this.estate_id
            }
        };
    },
    props: {
        estate_id: Number
    },
    methods: {
        sendForm() {
            axios.post(baseUri, this.form)
                .then(response => {
                    this.form = {
                        email: '',
                        name: '',
                        text: '',
                        estate_id: this.estate_id

                    };
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }

}
</script>


<template>
    <h2 class="mt-5">Contatta il proprietario</h2>
    <div class="card mt-4">
        <div class="card-body">
            <form @submit.prevent="sendForm">
                <div class="row d-flex justify-content-end">
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="email" class="form-label"><strong>Email <sup
                                        class="text-danger">*</sup></strong></label>
                            <input v-model.trim="form.email" type="email" class="form-control" id="email" name="email"
                                aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="name" class="form-label"><strong>Nome<sup
                                        class="text-danger">*</sup></strong></label>
                            <input v-model.trim="form.name" type="text" class="form-control" id="name" name="name">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="text" class="form-label"><strong>Messaggio<sup
                                        class="text-danger">*</sup></strong></label>
                            <textarea v-model.trim="form.text" class="form-control" name="text" id="text"
                                rows="5"></textarea>
                        </div>

                    </div>
                    <button class="btn btn-success">invia</button>

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