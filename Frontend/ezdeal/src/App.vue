<template>
  <v-app id="app">
      <v-toolbar color="blue" height="60px">
        <div id="picture1"></div>
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
