<template>
  <div>
    <div class="left">
      <ul>
        <li><router-link to="/FM/jingxuan"> 精选</router-link></li>
        <li><router-link to="/FM/jiemu"> 节目</router-link></li>
        <li><router-link to="/FM/biaoqian"> 标签</router-link></li>
        <li><router-link to="/FM/nj"> nj</router-link></li>
      </ul>
    </div>
    <div class="right">
      <keep-alive :include="['jingXuan','jieMu','biaoQian','myNj']">
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.left {
  float: left;
  width: 15%;
}
li {
  list-style: none;
  margin: 10px 0 12px 0;
}
a {
  color: black;
  text-decoration: none;
}
.right {
  float: right;
  width: 85%;
  /* background-color: pink; */
}
</style>