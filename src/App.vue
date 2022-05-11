<template>
  <div id="app">
    <myTop/>
    <myContent/>
    <footer class="footer">底部</footer>
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

<style>
#app{
  background: gray;
}
.footer{
  background: pink;
  margin-top: 20px;
  width: 101%;
  height: 44px;
  clear: both;
}
</style>
