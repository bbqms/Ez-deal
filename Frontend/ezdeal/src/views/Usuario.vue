<template>
  <div>
    <v-container grid-list-xs>
      <VCard style="background-color:rgb(255, 136, 0, 0.9);">
        <VCardTitle primary-title>
            <v-layout xs12 >  
                <v-flex xs4 justify-left>
                    <v-btn color="success" :to="{name: 'anuncios'}">Regresar</v-btn>
                </v-flex>
                <v-flex xs4 text-xs-center justify-center>
                    <h1>Mi Perfil</h1> 
                </v-flex>
          </v-layout>
        </VCardTitle>
        <v-img
          class="white--text"
            style="margin:auto"
          width="200px"
          :src="require('../Resources/user.png')"
        ></v-img>
        <VCardText>
            <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="email" class="label">Email: </label> </v-flex>  
             <v-flex xs6 text-xs-left class="text" > {{usuario.email}} </v-flex>
            </v-layout>

            <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="nombre" class="label">Nombres: </label> </v-flex>  
             <v-flex xs6 text-xs-left class="text"> {{usuario.nombre}} </v-flex>
            </v-layout>

             <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="nombre" class="label">Apellidos: </label> </v-flex>  
             <v-flex xs6  text-xs-left class="text"> {{usuario.apellido}} </v-flex>
            </v-layout>
            
             <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="nombre" class="label">Contacto: </label> </v-flex>  
             <v-flex xs6 text-xs-left class="text"> {{usuario.url_Contacto}} </v-flex>
            </v-layout>

             <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="nombre" class="label">Telefono: </label> </v-flex>  
             <v-flex xs6  text-xs-left class="text"> {{usuario.telefono}} </v-flex>
            </v-layout>

             <v-layout row wrap justify-center text-xs-center>
             <v-flex xs6> <label for="nombre" class="label">Distrito: </label> </v-flex>  
             <v-flex xs6 text-xs-left class="text"> {{usuario.distrito}} </v-flex>
            </v-layout>

        </VCardText>
      </VCard>
    </v-container>
  </div>
</template>

<style>
.label{
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
}
.text{
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
}

</style>




<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        id: "",
        email: "",
        contraseña: "",
        nombre: "",
        apelllido: "",
        url_Contacto: "",
        telefono: "",
        distrito: ""
      },
      dialog: false,
      search: "",
      idaux: this.$route.params.id,
      
    };
  },

  created() {
    this.listar();
  },

  methods: {
    listar() {
      let me = this;
      axios
        .get("api/usuario/"+this.idaux)
        .then(function(response) {
          me.usuario = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>