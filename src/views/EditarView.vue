<template>
    <div>
        <HeaderCmp/>
        <div class="container py-1 h-50">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
              <div class="card-body p-4 p-md-3">
                <h3 class="mb-4 pb-2 pb-sm-0 mb-sm-2">Formulario Edición</h3>
                <form v-on:submit.prevent = "passSumb">
                  <div class="row">
                    <div class="col-sm-6 mb-2">
                      <div class="form-outline">
                        <input type="text" id="Nombres" class="form-control form-control-sm" v-model="nombres"/>
                        <label class="form-label" for="Nombres">Nombres</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-2">
                      <div class="form-outline">
                        <input type="text" id="Apellidos" class="form-control form-control-sm" v-model="apellidos"/>
                        <label class="form-label" for="Apellidos">Apellidos</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div id="app" class="col-sm-6 mb-2">
                      <h6 class="mb-2 pb-1">Tipo de Documento: </h6>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="CC" value="CC" v-model="tipDoc" checked>
                        <label class="form-check-label" for="CC">CC</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="CE" value="CE" v-model="tipDoc">
                        <label class="form-check-label" for="CE">CE</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="PA" value="PA" v-model="tipDoc">
                        <label class="form-check-label" for="PA">PA</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-2 d-flex align-items-center">
                      <div class="form-outline datepicker w-100">
                        <input type="text" class="form-control form-control-sm" id="Documento" v-model="numDoc"/>
                        <label for="Documento" class="form-label">Documento</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input type="email" id="emailAddress" class="form-control form-control-sm" v-model="email"/>
                        <label class="form-label" for="emailAddress">Email</label>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input type="date" id="formdate" class="form-control form-control-md" v-model="fecha"/>
                        <label class="form-label" for="formdate">Fecha de reserva</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 mb-4 pb-2">
                      <select class="select form-control-sm" v-model="tipRes">
                        <option value="selección" disabled>selección</option>
                        <option value="Cena">Cena</option>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Onces">Onces</option>
                        <option value="Cumpleaños">Cumpleaños</option>
                        <option value="Ocación especial">Ocación especial</option>
                      </select>
                      <label class="form-label select-label">Tipo de Reserva</label>
                    </div>
                    <div class="col-sm-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input type="text" id="cantidadPersonas" class="form-control form-control-sm" v-model="cantPer" />
                        <label class="form-label" for="cantidadPersonas">Cantidad de Personas</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-outline ">                  
                      <textarea class="form-control form-control-sm" maxlength="200" cols="3" id="textarea" name="textarea" rows="3" v-model="descrip"></textarea>
                        <label class="control-label " for="textarea">
                        Observaciones, max 200 cract.
                        </label>
                  </div>
                  <div class="form-grup">
                    <input class="btn btn-secondary mb-4" type="submit" value="Editar">
                    <input class="btn btn-success mb-4" type="reset" value="Reset">
                    <input class="btn btn-primary mb-4" type="button" value="Salir" v-on:click ="irhome">
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderCmp from '@/components/HeaderCmp.vue';

export default {
    name: 'EditarView',
    components: {
        HeaderCmp
    },
    data: function() {
        return {
            form: {
            "id": "",
            "nombre": "Prueba",
            "apellidos": "Prueba",
            "tipoDoc": "Prueba",
            "identificacion": "Prueba",
            "email": "Prueba",
            "fecha": "Prueba",
            "reserva": "Prueba",
            "observaciones": "Prueba",
            "canrpersonas": "Prueba"
            }
        }
    },
    methods: {
        irhome(){
            console.log("regresahome");
            this.$router.push('/HomeView/');
        }
    }
}
</script>
