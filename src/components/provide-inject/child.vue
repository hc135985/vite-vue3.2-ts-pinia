<template>
  <h3>我是Child，我的父亲叫{{parentName}}</h3>
  <h3>我今天被打了{{count}}顿</h3>
  <h3>我非得<el-button @click="addCount">作一下</el-button>，我又被打了一顿</h3>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
  name: 'Child',
  setup() {
    const parentName = <string> inject('parentName', 'defaultName');
    const count = <number> inject('count', 0);
    const addCount = inject('addCount');
    return {
      parentName,
      count,
      addCount,
    }
  }
}
</script>

<style>

</style>