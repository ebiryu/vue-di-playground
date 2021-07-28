<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <FooComponents />
  <FooComponents />
</template>

<script lang="ts">
import { container } from "tsyringe";
import { defineComponent, provide } from "vue";
import FooComponents from "./components/Foo.vue";
import { Bar, BarKey, Foo, FooKey } from "./model/FooBar";

export default defineComponent({
  name: "App",
  components: {
    FooComponents,
  },
  setup() {
    container.register(BarKey, { useClass: Bar });
    container.register(FooKey, { useClass: Foo });
    provide("bar", container.resolve(FooKey));
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
