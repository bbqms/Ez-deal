<template>
  <div>
    <v-container grid-list-xs>
      <v-flex style="margin:auto" xs6 pa-5>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Búsqueda"
          single-line
          hide-details
        ></v-text-field>
      </v-flex>

      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">Nuevo</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline" style="margin:auto">Nuevo Anuncio</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="titulo" label="Titulo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field box v-model="descripcion" label="Descripcion"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="costo_Servicio" label="Costo (S/.)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="dia" label="Dias (Lunes-Martes-Viernes)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="horaInicio" label="Hora Inicio"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="horaFin" label="Hora Fin"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-select
                    v-model="anuncianteID"
                    :items="usuarios"
                    item-value="id"
                    item-text="nombre"
                    label="Anunciante"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-select
                    v-model="servicioId"
                    :items="servicios"
                    item-value="id"
                    item-text="nombre"
                    label="Servicio"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click.native="guardar">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-data-table :headers="headers" :items="anuncios" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>
            <v-btn color="success">Solicitar</v-btn>
          </td>
          <td>{{ props.item.titulo }}</td>
          <td>{{ props.item.descripcion }}</td>
          <td>{{ props.item.costo_Servicio }}</td>
          <td>{{ props.item.esta_Habilitado }}</td>
          <td>{{ props.item.valoracion }}</td>
          <td>{{ props.item.dia }}</td>
          <td>{{ props.item.horaInicio }}</td>
          <td>{{ props.item.horaFin }}</td>
          <td>{{ props.item.anuncianteNombre }}</td>
          <td>{{ props.item.servicioNombre }}</td>
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
      items: [{ text: "Si", value: "true" }, { text: "No", value: "false" }],
      anuncios: [],
      usuarios: [],
      servicios: [],
      dias: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
      ],
      dialog: false,
      headers: [
        { text: "Solicitar", value: "solicitar", sortable: false },
        { text: "Titulo", value: "titulo", sortable: false },
        { text: "Descripcion", value: "descripcion", sortable: false },
        { text: "Costo", value: "costo_Servicio" },
        { text: "Habilitado", value: "esta_Habilitado" },
        { text: "Valoracion", value: "valoracion" },
        { text: "Dia", value: "dia" },
        { text: "HoraInicio", value: "horaInicio" },
        { text: "HoraFin", value: "horaFin" },
        { text: "Anunciante", value: "anunciante" },
        { text: "Tipo de Servicio", value: "servicio" }
      ],
      search: "",
      dialog: false,

      id: "",
      titulo: "",
      descripcion: "",
      costo_Servicio: "",
      esta_Habilitado: "true",
      valoracion: 0,
      dia: "",
      horaInicio: "",
      horaFin: "",
      anuncianteID: "",
      anuncianteNombre: "",
      servicioId: "",
      servicioNombre: ""
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
        .get("api/anuncio")
        .then(function(response) {
          me.anuncios = response.data;
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
    limpiar() {
      this.id = "";
      this.titulo = "";
      this.descripcion = "";
      this.costo_Servicio = "";
      this.esta_Habilitado = "";
      this.valoracion = "";
      this.dia = "";
      this.horaInicio = "";
      this.horaFin = "";
      this.anuncianteId = "";
      this.anuncianteNombre = "";
      this.servicioId = "";
    },

    guardar() {
      //Código para guardar
      let me = this;
      axios
        .post("api/anuncio", {
          titulo: me.titulo,
          descripcion: me.descripcion,
          costo_Servicio: me.costo_Servicio,
          esta_Habilitado: me.esta_Habilitado,
          valoracion: me.valoracion,
          dia: me.dia,
          horaInicio: me.horaInicio,
          horaFin: me.horaFin,
          anuncianteID: me.anuncianteID,
          servicioId: me.servicioId
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