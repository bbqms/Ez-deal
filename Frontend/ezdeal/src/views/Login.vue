<template>
  <v-layout style="margin-top:10%">
    <v-flex xs6 style="background-color:orange;margin:auto" pa-5>
      <h1>Iniciar Sesion</h1>
      <v-text-field ma name="name" label="Correo" placeholder="Correo" id="id"></v-text-field>
      <v-text-field type="password" placeholder="Contraseña" label="Contraseña"></v-text-field>
      <v-btn color="success" block :to="{name: 'anuncios'}">Inciar Sesion</v-btn>
      <v-btn color="blue"  block href="./registro" :to="{name: 'registro'}">Registro</v-btn>
    </v-flex>
  </v-layout>
</template>

<style>
#formulario {
  background-color: rgb(30, 255, 0);
  width: 30%;
  height: 40%;
  padding: 15px;
  display: block;
  margin: auto;
}
.Boton {
  position: relative;
  text-align: center;
  display: block;
}
.Titulo {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}
#login {
  background-image: url("../Resources/fondo.png");
  background-size: 100% 100%;
}
</style>





<script>
export default {};
</script>