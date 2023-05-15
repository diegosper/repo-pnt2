<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink> |  
        <RouterLink to="/system">System</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>

</template>

<style></style>
