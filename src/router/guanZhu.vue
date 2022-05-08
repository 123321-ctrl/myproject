<template>
  <div class="box">
    <ul class="list">
      <li v-for="(item,index) in dataList" :key="index">
        <a href=""><img :src="item.avatarUrl" alt="" width="60px" height="60px" /></a>
        <div>
          <p class="name">{{item.nickname}}</p>
          <p class="detail"><span>动态{{item.eventCount}}</span><span>关注{{item.follows}}</span><span>粉丝{{item.followeds}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {watchList} from '../network/finding'
export default {
  name: "guanZhu",
  data(){
    return{
      dataList:[]
    }
  },
  computed:{
    uid(){
      return localStorage.getItem('uid')
    }
  },
  created(){
    this.watchList(this.uid)
  },
  methods:{
    watchList(uid){
      watchList(uid).then(res =>{
        // console.log(res.follow)
        this.dataList = res.follow
      })
    }
  }
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.list {
  width: 900px;
  background: pink;
}
li{
  list-style: none;
  float: left;
  width: 409px;
  height: 80px;
  padding: 20px 20px 0;
  border-right: 1px solid black;
}
img{
  float: left;
}
.name{
  color:aqua;
  margin-left: 68px;
  margin-bottom: 16px;
}
.detail span{
  padding-right: 14px;
  padding-left: 10px;
  border-right: 1px solid black;
}
</style>