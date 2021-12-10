<template>
  <div>provide-inject</div>
  <Child />
</template>

<script lang="ts">
import { provide, readonly, ref, reactive } from 'vue';
import Child from './child.vue';

interface RefString {
  value: string
}

interface RefNumber {
  value: number
}

interface StateType {
  name: string,
  age: number
}

export default {
  name: 'ProvideInject',
  setup() {
    const parentName = <RefString> ref<string>('huangchao')
    const count = <RefNumber> ref<number>(1);
    const state = <StateType> reactive({
      name: 'hhh',
      age: 18
    })
    const addCount = () => {
      count.value = count.value + 1;
    }
    provide('parentName', readonly(parentName))
    provide('count', readonly(count))
    provide('addCount', addCount);
    return {
      state
    }
  },
  components: {
    Child
  }
}
</script>

<style>

</style>