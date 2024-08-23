<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="tholXixi">点击</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getCurrentInstance } from 'vue'
// import throttle from '@/package/tool-js/throttle'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const { throttle, add } = proxy.galaxyTools;

    const test = () => {
      console.log(add(1, 5))
    }

    const throttleTest = throttle(test, 2000)

    return {
      throttleTest,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
