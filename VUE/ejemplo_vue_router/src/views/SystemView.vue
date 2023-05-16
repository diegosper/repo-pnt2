<template>
  <ion-page>
    <ion-content>
      <h2>System page</h2>
      <ion-list v-for="objeto in lista" :key="objeto.id">
        {{ objeto }}
      </ion-list>

      <ion-input v-model="elemento.id" label="Cóodigo"></ion-input>
      <ion-input v-model="elemento.nombre" label="Nombre"></ion-input>
      <ion-button @click="agregarALista">Agregar a la lista</ion-button>
      <ion-button @click="ordenarLista">Ordenar</ion-button>
      <ion-button @click="irAHome">Ir a home</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent, IonList, IonInput } from "@ionic/vue";

export default {
  data() {
    return {
      usuario: "Diego",
      lista: [
        { id: 100, nombre: "Pepe" },
        { id: 101, nombre: "Laia" },
        { id: 102, nombre: "Gastón" }
      ],
      elemento: {}
    };
  },

  components: { IonPage, IonButton, IonContent, IonList, IonInput },

  methods: {
    irAHome(usuario) {
      this.$router.push("Detail/Dinosaurio");
    },
    agregarALista(){
      this.lista.push({...this.elemento})
      this.elemento = {}

    },
    ordenarLista(){
      this.lista.sort( (a,b) => a.id - b.id )
    }
  },
};
</script>

<style>
</style>