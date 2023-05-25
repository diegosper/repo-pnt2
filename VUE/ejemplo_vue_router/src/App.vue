<script>
<<<<<<< HEAD
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

=======
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";
export default {
  components: { IonApp, IonHeader },
};
</script>

<template>
  <ion-app>
      <ion-header>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/system">System</RouterLink>
      </ion-header>
      
    <RouterView />
  </ion-app>
>>>>>>> e6906fdeec3e51e554731af853a53c5c2dbaa841
</template>

<style></style>
