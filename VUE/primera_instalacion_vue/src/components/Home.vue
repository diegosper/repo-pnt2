<template>
  <div>
    <h2>{{titulo}}</h2>
    <p>El usuario activo es: {{ usuario }}</p>
    <br/>
    Roles desde el componente:
    <Roles :roles="roles" @agregarRolHijo="agregarRol"/>
    <!-- en Roles, además de pasar la lista, paso la función de agregarRol -->
<!--
  ESTO LO HAGO DIRECTAMENTE EN EL COMPONENTE ROLES, PARA ENCAPSULAR CÓDIGO
    <li v-for="rol in roles" v-bind:key="rol">    
      {{rol}}
    </li>
-->
    
  </div>
</template>

<script>
import Roles from './Roles.vue'
export default {
  data() {
    return {
      titulo: 'Home en VUEEEEEE',
      roles: ['Administrador', 'Encargado', 'Usuario']
    };
  },
  components:{
    Roles,
  },
  props: ['usuario'],
  methods: {
    //TENGO ACÁ LA FUNCIÓN DE AGREGARROL XQ ACÁ TENNGO LA LISTA
    agregarRol(nRol){
      this.roles.push(nRol)
    }
  }
};
</script>

<style>
</style>