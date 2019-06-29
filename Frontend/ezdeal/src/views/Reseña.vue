<template>
  <div>
   <v-container grid-list-xs>
      <v-flex style="margin:auto" xs6 pa-5>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="BÃºsqueda"
          single-line
          hide-details
        ></v-text-field>
      </v-flex>
      <v-layout xs12 >  
                <v-flex xs4 justify-left>
                    <v-btn color="success" :to="{name: 'anuncios'}">Regresar</v-btn>
                </v-flex>
               
          </v-layout>
      <v-data-table :headers="headers" :items="reseñas" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          

          <td>{{ props.item.titulo }}</td>
          <td>{{ props.item.descripcion }}</td>
          <td>{{ props.item.costo_Servicio }}</td>
          <td>{{ props.item.esta_Habilitado }}</td>
    
        </template>
       
      </v-data-table>
    </v-container>
  
  
  </div>

  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items : [{text:'Si', value:'true'},{text:'No', value:'false'} ],
      reseñas: [],
      dialog: false,
      headers: [
        { text: "Cliente", value: "cliente", sortable: false },
        { text: "Anunciante", value: "anunciante" },
       { text: "Contenido", value: "contenido", sortable: false },
        { text: "Valoracion", value: "valoracoion", sortable: false },
      ],
      search: "",
      dialog: false,

      id: "",
      contenido: "",
      valoracion: "",
      anuncioId: "",
      clienteId: "",
      anuncioTitulo: "",
      clienteNombre: ""
      
    };
  },

  created() {
    this.listar();
    
  },

  methods: {
    listar() {
      let me = this;
      axios
        .get("api/reseña")
        .then(function(response) {
          me.reseñas = response.data;
          alert("ASDASDASDD");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
    close() {
      this.dialog = false;
    },
    limpiar() {
      this.id= "",
      this.contenido= "",
      this.valoracion= "",
      this.anuncioId= "",
      this.clienteId= "",
      this.anuncioTitulo= "",
      this.clienteNombre= ""  

    },

    guardar() {
      //CÃ³digo para guardar
      let me = this;
      axios
        .post("api/reseÃ±a", {
           
        })
        .then(function(response) {
          me.close();
          me.listar();
          me.limpiar();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>