<template>
    <div>   
        <HeaderCmp/>
        <div class="container">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-sm table-secondary table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Tipo documento</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fecha Reserva</th>
                            <th scope="col">Tipo Reserva</th>
                            <th scope="col">Observaciones</th>
                            <th scope="col">Cantidad de Personas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-on:click="editar">
                            <td>1</td>
                            <td>Amet</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                            <td>Consectetur</td>
                        </tr>
                    </tbody>
                    <br>
                </table>
            </div>
        </div>
        <div class="container">
            <div class="table-responsive">
                <table class="table table-hover table-striped table-bordered table-sm table-secondary ">
                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sa</td>
                            <td>Amet</td>
                            <td>Consectetur</td>
                        </tr>
                    </tbody>
                </table>
            </div>        
        </div>            
    </div>
</template>

<script>
import HeaderCmp from '@/components/HeaderCmp';
export default {
  name: 'DashboardView',
  components:{
    HeaderCmp
  },
    data: function(){
      return{
        id: ""
      }
    },
  methods: {
    editar(){
        this.$router.push('/EditarView/' + this.id);
    }
  }
}
</script>

<style scoped>


</style>