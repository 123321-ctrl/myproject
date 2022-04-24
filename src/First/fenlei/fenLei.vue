<template>
  <div>
      <div class="left">
          <ul>
              <li><a href="#">全部分类</a></li>
              <li><router-link to="/singer"></router-link> <a href="#">音乐人</a></li>
              <li><a href="#">乐器</a></li>
          </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'feiLei'
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .left{
        float: left;
        width: 20%;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .right{
        float: right;
        width: 80%;
        background-color: pink;
    }
</style>