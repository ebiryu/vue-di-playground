<template>
  <div>DIあり</div>
  <Number />
  <CounterButtons />
</template>

<script lang="ts">
import { container } from "tsyringe";
import { defineComponent, provide, reactive } from "vue";
import {
  CounterNumber,
  NumberKey,
  Counter,
  CounterKey,
} from "../model/counter";
import CounterButtons from "./CounterButtons.vue";
import Number from "./Number.vue";

export default defineComponent({
  components: { Number, CounterButtons },
  setup() {
    container.register(NumberKey, {
      useFactory: () => reactive(new CounterNumber()),
    });
    container.register(CounterKey, { useClass: Counter });
    const counter = container.resolve<Counter>(CounterKey);
    provide("counter", counter);
    provide("number", counter.number);
  },
});
</script>
