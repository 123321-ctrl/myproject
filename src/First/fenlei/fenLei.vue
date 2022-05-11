<template>
  <div>
    <div class="left">
      <ul>
        <li><router-link to="/fenlei/myall">乐队</router-link></li>
        <li>
          <router-link to="/fenlei/singer">男歌手</router-link>
        </li>
        <li><router-link to="/fenlei/femalesinger">女歌手</router-link></li>
      </ul>
    </div>
    <div class="right">
      <keep-alive :include="['mySinger', 'myAll', 'yueQi']">
        <transition name="fade" mode="out-in">
          <router-view> </router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "feiLei",
};
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
.fade-enter-aactive,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>