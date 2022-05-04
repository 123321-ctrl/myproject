<template>
  <div id="app">
    <myTop/>
    <myContent/>
    <playSong class="playsong"/>
  </div>
</template>

<script>
import myTop from './components/myTop.vue'
import myContent from "./components/myContent.vue"
import playSong from './components/playSong.vue'

export default {
  name: 'App',
  components: {
    myTop,myContent,playSong
  }
}
</script>

<style scoped>

</style>
