<template>
  <div>provide-inject</div>
  <Child />
</template>

<script lang="ts">
import { provide, readonly, ref  } from 'vue';
import Child from './child.vue';
export default {
  name: 'ProvideInject',
  setup() {
    const parentName = ref('huangchao')
    const count = ref(1);
    const addCount = () => {
      count.value = count.value + 1;
    }
    provide('parentName', readonly(parentName))
    provide('count', readonly(count))
    provide('addCount', addCount);
  },
  components: {
    Child
  }
}
</script>

<style>

</style>