<template>
<div>
    <HeaderCmp/>
    <b-container fluid="sm">
        <b-row class="justify-content-md-center">
            <b-col lg="4" class="pb-4">
                <img src="@/assets/manager_icon_129392.png" id="icon" alt="User Icon" />
                <b-button v-on:click="ingUser" size="lg" variant="outline-primary">
                    Administrador            
                </b-button>
            </b-col>
            <br><br>
            <b-col lg="4" class="pb-4">
                <img src="@/assets/userr.png" id="icon" alt="User Icon" />
                <b-button v-on:click="ingClt" size="lg" variant="outline-primary">
                    Reserva
                </b-button>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import HeaderCmp from '@/components/HeaderCmp';
export default {
    name: 'HomeView',
    components: {
        HeaderCmp,
    },
    methods: {
        ingUser(){
            this.$router.push('/RegisterView/');
        },
        ingClt(){
            this.$router.push('/ReservaView/');
        }
    }
}
</script>

<style>
    .custom-btn {
        font-size: 1.5rem; /* Tamaño de fuente personalizado */
        margin: 10px;
    }
</style>