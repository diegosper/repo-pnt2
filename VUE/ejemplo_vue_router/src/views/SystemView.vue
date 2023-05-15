<template>
  <div>
    <h2>System page</h2>
    <button @click="irAHome">Ir a home</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      usuario:"Diego"
    }
  },

methods:{
  irAHome(usuario){
    this.$router.push('Detail/Dinosaurio')
  }
}
}
</script>

<style>

</style>