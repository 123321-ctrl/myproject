<template>
  <div>
    <div class="left">
      <ul>
        <li><router-link to="/zhuanji/cn"> 华语专辑</router-link></li>
        <li><router-link to="/zhuanji/en"> 欧美专辑</router-link></li>
        <li><router-link to="/zhuanji/kr"> 韩语专辑</router-link></li>
        <li><router-link to="/zhuanji/jp"> 日语专辑</router-link></li>
      </ul>
    </div>
    <div class="right">
      <keep-alive :include="['cn_zhuanji','en_zhuanji','kr_zhuanji','jp_zhuanji']">
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name:'zhuanJi',
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.left{
  float: left;
  width: 15%;
}
li{
  list-style: none;
  margin-bottom: 15px;
  text-align: left;
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
  /* color: black; */
}
a {
  color: black;
  text-decoration: none;
}
.right{
  float: right;
  width: 85%;
}
</style>