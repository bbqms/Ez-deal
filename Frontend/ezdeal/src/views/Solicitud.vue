<template>
  <div>
    <v-container grid-list-xs>
      <v-data-table :headers="headers" :items="solicitudes" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.mensaje }}</td>
          <td>{{ props.item.estado }}</td>
          <td>{{ props.item.aprobacion }}</td>
          <td>{{ props.item.anuncioTitulo }}</td>
          <td>{{ props.item.clienteNombre }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="listar">Resetear</v-btn>
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
      solicitudes: [],
      usuarios: [],
      anuncios: [],
      dialog: false,
      headers: [
        { text: "Mensaje", value: "Mensaje", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Aprobacion", value: "aprobacion" },
        { text: "Anuncio", value: "anuncio" },
        { text: "Cliente", value: "cliente" }
      ],
      search: "",
      dialog: false,

      id: "",
      mensaje: "",
      estado: "",
      aprobacion: "",
      anuncioId: "true",
      anuncioTitulo: 0,
      clienteId: "",
      clienteNombre: ""
    };
  },

  created() {
    this.listar();
    this.listarServicios();
    this.listarUsuarios();
  },

  methods: {
    listar() {
      let me = this;
      axios
        .get("api/solicitud")
        .then(function(response) {
          me.solicitudes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    listarServicios() {
      let me = this;
      axios
        .get("api/servicio")
        .then(function(response) {
          me.servicios = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    listarUsuarios() {
      let me = this;
      axios
        .get("api/usuario")
        .then(function(response) {
          me.usuarios = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    close() {
      this.dialog = false;
    },

    deleteItem(item){
      let me = this;
      axios.delete('api/solicitud',{data:{id}})
      .then(function(response) {
          me.listar();
        })
        .catch(function(error) {
          console.log(error);
        });

    }
  }
};
</script>