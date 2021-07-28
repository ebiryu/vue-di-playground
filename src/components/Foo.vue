<template>
  <div><button @click="greet">greet</button></div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Foo } from "../model/FooBar";

export default defineComponent({
  setup() {
    const foo = inject<Foo>("bar");
    const greet = () => {
      foo?.greet();
    };
    return { greet };
  },
});
</script>

<style scoped>
</style>
