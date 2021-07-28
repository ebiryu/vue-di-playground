<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <DiCounter />
  <NonDiCounter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DiCounter from "./components/DiCounter.vue";
import NonDiCounter from "./components/NonDiCounter.vue";

export default defineComponent({
  name: "App",
  components: {
    DiCounter,
    NonDiCounter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
