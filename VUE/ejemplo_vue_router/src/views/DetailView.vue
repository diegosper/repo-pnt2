<template>
  <ion-page>
    <h1>Detail page</h1>
    <br><br>
    <h3>Paso un parámetro por ruta</h3>
    <p>Usuario: {{ $route.params.parametroPorRuta }}</p>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
export default {
  components: { IonPage },
};
</script>

<style>

</style>