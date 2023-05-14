<template>
  <div>
    <li v-for="rol in roles" v-bind:key="rol">
      <!--
    PARA COMPILAR, EL V-FOR REQUIERE UNA 'CLAVE' MIENTRAS RECORRO LA LISTA'
    -->
      {{ rol }}
    </li>
    <input type="text" v-model="nRol">
    <button @click="agregarRol">Agregar rol</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nRol:'',
        }
    },
    props: ['roles'],
    methods: {
        agregarRol(){
            //LLAMO AL MÉTODO QUE ESTÁ EN EL COMPONENTE HIJO
            this.$emit("agregarRolHijo", this.nRol); //el this.nRol es el parámetro que le paso
        }
    }
};
</script>

<style>
</style>