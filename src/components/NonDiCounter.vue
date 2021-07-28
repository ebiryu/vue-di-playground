<template>
  <div>DIなし</div>
  <Number />
  <CounterButtons />
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from "vue";
import { CounterNumber, Counter } from "../model/counter";
import CounterButtons from "./CounterButtons.vue";
import Number from "./Number.vue";

export default defineComponent({
  components: { Number, CounterButtons },
  setup() {
    const counterNumber = reactive(new CounterNumber());
    provide("number", counterNumber);
    provide("counter", new Counter(counterNumber));
  },
});
</script>
