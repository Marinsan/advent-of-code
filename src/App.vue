<template>
  <Ligths />
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Cristian Marin Tejeda" year="2020"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ligths from './components/Lights'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Ligths
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #16c11d;
  margin-top: 60px;
}

body, html {
  height: 100%;
    background-color: #262626;
}
</style>
