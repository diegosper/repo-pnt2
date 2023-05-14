<script>
import Home from "./components/Home.vue";
import Cabecera from "./components/Cabecera.vue" 
export default {
  data(){
    return{
      dataUsuario: 'PNT2'
    }
  },

  components: {
    Home,
    Cabecera,
  },
};
</script>

<template>
<!--
    <div>Hola mundo!!!</div>
-->
  <div>
    <Cabecera/>
    App:
    <Home :usuario="dataUsuario" />
  </div>

<!--
  SI NO PASARA EL VALOR POR DATA, ES DECIR, SI PASARA SOLO UN STRING, SERÍA SIN LOS DOS PUNTOS:
  <Home usuario="Diego" />
-->

  <!-- 
    Se encapsula y cada componente es dueño de sus datos.<template>
    Se suele enviar todos desde ¿el componente? principal (App), para no tener que estar cambiando en todos los otro componentes
-->
    </template>

<style scoped>
</style>
