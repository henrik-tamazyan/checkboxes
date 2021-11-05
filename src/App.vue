<template>
  <div id="app">
    <Navbar />
     <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/app/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 800;
}
.active-link{
  color: red;
}
</style>
