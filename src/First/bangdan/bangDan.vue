<template>
  <div>
    <div class="left">
      <p>音乐排行榜</p>
      <ul>
        <li><router-link to="/all">总榜</router-link></li>
        <li><router-link to="/like">人气榜</router-link></li>
        <li><router-link to="/listen">热播榜</router-link></li>
        <li><router-link to="/new_music">新曲榜</router-link></li>
      </ul>
      <p>用户排行榜</p>
      <ul>
        <li>用户</li>
        <li>主页</li>
      </ul>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'bangDan'
};
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.left{
    width: 20%;
    /* height: 100%; */
    float: left;
}
p{
    color: green;
    padding-bottom: 10px;
    border-bottom: 1px black solid;
}
li{
    list-style: none;
    margin: 10px 0 12px 0; 
}
a{
    text-decoration: none;
    color: black;
}
.right{
    float: right;
    width: 80%;
    /* height: 300px; */
    /* background-color: pink; */
}
</style>