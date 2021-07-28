<template>
  <div><button @click="greet">greet</button></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bar, Foo } from "../model/FooBar";

export default defineComponent({
  setup() {
    const greet = () => {
      new Foo(new Bar()).greet();
    };
    return { greet };
  },
});
</script>


<style scoped>
</style>
