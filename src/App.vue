<template>
  <b-container>
    <router-view />
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body{
  background-image: url(https://pa1.narvii.com/6523/b0b0df46eb7ee9fa0047eb0d0f2ffbe7bffbdfb4_hq.gif);
  font-family: 'Comfortaa', cursive;
}

</style>
