<template>
  <v-app id="app">
      <v-toolbar color="blue" height="60px">
        <div id="picture1"></div>
       <v-btn style="position:absolute"  :to="{name: 'registro'}">Registro</v-btn>
       <v-btn style="position:absolute; margin-left:110px"  :to="{name: 'anuncios'}">Anuncios</v-btn>
       <v-btn style="position:absolute; margin-left:220px"  :to="{name: 'solicitud'}">Solicitudes</v-btn>
        <v-btn style="position:absolute; margin-left:350px "  href="http://localhost:8080/usuarios/1">Perfil</v-btn>
      </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
#picture1 {
   width: 20%;
   height: 85%;
   background-image: url('Resources/logo.png');
   background-size: 100% 100%;
   display: block;
   margin: auto;
  
}
#app{
  background-image: url("Resources/fondo.png");
  background-size: 100% 100%;
}
.botoncito
{
  position: absolute;
}
</style>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
