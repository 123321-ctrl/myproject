<template>
  <div id="app">
    <myTop/>
    <myContent/>
  </div>
</template>

<script>
import myTop from './components/myTop.vue'
import myContent from "./components/myContent.vue"

export default {
  name: 'App',
  components: {
    myTop,myContent
  }
}
</script>

<style>
    
</style>
