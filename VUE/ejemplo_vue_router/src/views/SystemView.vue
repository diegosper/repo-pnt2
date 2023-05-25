<template>
  <ion-page>
    <ion-content>
      <h2>System page</h2>
      <ion-list v-for="objeto in lista" :key="objeto.id">
        {{ objeto }}
      </ion-list>

      <ion-input v-model="elemento.id" label="Código"></ion-input>
      <ion-input v-model="elemento.nombre" label="Nombre"></ion-input>
      <ion-button @click="agregarALista">Agregar a la lista</ion-button>
      <ion-button @click="ordenarLista">Ordenar</ion-button>
      <ion-button @click="eliminarDeLista(elemento.id)">Eliminar</ion-button>
      <ion-button @click="modificarNombre(elemento.id)">Modificar nombre</ion-button>
      <br>
      <ion-button @click="cargarLista">Cargar lista desde API</ion-button>
      <br>
      <ion-button @click="irAHome">Ir a home</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent, IonList, IonInput } from "@ionic/vue";
import axios from 'axios';
import listaService from '../services/listaService'


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
    async agregarALista(){
      try {
        //this.lista.push({...this.elemento})
        const elemento = {...this.elemento};
        //await axios.post("https://646be9b97b42c06c3b2a916c.mockapi.io/api/v1/usuarios", elemento)
        await listaService.agregar(elemento);
        await this.cargarLista();
        this.elemento = {}
        
      } catch (e) {
        alert(e + ': se produjo un error')
      }

    },
    ordenarLista(){
      this.lista.sort( (a,b) => a.id - b.id )
    },
    async cargarLista(){
      try {
        //const response = await axios.get("https://646be9b97b42c06c3b2a916c.mockapi.io/api/v1/usuarios")
        this.lista = await listaService.cargarLista();
        
        //this.lista = response.data
      } catch (e) {
        alert(e)
      }

    },
    async eliminarDeLista(id){
      try {
        //await axios.delete("https://646be9b97b42c06c3b2a916c.mockapi.io/api/v1/usuarios/" + id )
        
        listaService.eliminar(id); 
        await this.cargarLista()
      } catch (e) {
        if (id == undefined) {
          alert('Debe ingresar el Id del usuario a eliminar')
        } else {
          alert(e + ': se produjo un error')
        }
      }
    },

    async modificarNombre(id){
      try {
        const elemento = {...this.elemento}
        console.log(elemento);
        //await axios.put("https://646be9b97b42c06c3b2a916c.mockapi.io/api/v1/usuarios/" + id, elemento )
        await listaService.modificar(id, elemento)
        await this.cargarLista()
        this.elemento = {}
      } catch (e) {
        alert(e + ': se produjo un error')
      }
    }
  },
};
</script>

<style>
</style>