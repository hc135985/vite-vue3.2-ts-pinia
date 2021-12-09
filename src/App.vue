<template>
  <h1>hi</h1>
  <el-button><router-link to="/">home</router-link></el-button>
  <el-button><router-link to="/test">test</router-link></el-button>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
