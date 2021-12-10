<template>
  <h2>test</h2>
  <div>
    count: {{store.count}} /
    getters: {{store.countPow2}}
    <el-button @click="addCount">增加</el-button>
  </div>
</template>

<script lang="ts">
import { useStore } from '/@/store/test';

export interface TestStore {
  count: number
}

export default {
  name: 'Test',
  setup() {
    const store = <TestStore> useStore();
    /**
     * state的数据可以直接使用store.***，不能以下面的形式
     * return {
     *  count: store.count
     * }
     * 这样修改会造成数据不被监听
     * 方法是可以以这种方法去用的
     * */ 
    return {
      store,
      addCount: store.countPlus
    }
  }
}
</script>

<style>

</style>