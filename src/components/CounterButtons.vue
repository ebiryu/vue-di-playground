<template>
  <div>
    <button @click="counter.decrement">-</button>
    <button @click="counter.increment">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Counter } from "../model/counter";

export default defineComponent({
  setup() {
    const counter = inject<Counter>("counter");
    if (!counter) {
      throw new Error(`Could not resolve "counter"`);
    }
    console.log(counter.decrement);
    return { counter };
  },
});
</script>
