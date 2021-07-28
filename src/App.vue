<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <FooComponents />
  <FooComponents />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import FooComponents from "./components/Foo.vue";
import { Bar, Foo } from "./model/FooBar";

export default defineComponent({
  name: "App",
  components: {
    FooComponents,
  },
  setup() {
    provide("bar", new Foo(new Bar()));
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
