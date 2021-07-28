<template>
  <div>{{ number }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { CounterNumber } from "../model/counter";

export default defineComponent({
  setup() {
    const number = inject<CounterNumber>("number");
    if (!number) {
      throw new Error(`Could not resolve "number"`);
    }
    console.log(number.value);
    return { number: computed(() => number.value) };
  },
});
</script>
