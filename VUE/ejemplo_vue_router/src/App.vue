<script>
import { RouterLink, RouterView } from 'vue-router'
import {IonApp} from '@ionic/vue'
export default {
components: {IonApp}
}
</script>

<template>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink> |  
        <RouterLink to="/system">System</RouterLink>
      </nav>
      <RouterView/>
    </div>

</template>

<style></style>
