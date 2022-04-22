<template>
  <div>
    <div class="box"><span class="hot">{{title}}</span> <span class="play">播放榜单</span></div>{{songsId}}
    <ul>
      <li v-for="(item,index) in data" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import {getBannerData} from '../network/finding'
export default {
  name: "MyJingxuan3",
  props:['title','songsId'],
  data(){
    return{
      data:[],
    }
  },
  created(){
      this.getBannerData()
  },
  methods:{
      getBannerData(){
        getBannerData().then(res =>{
          console.log(res);
          this.data = res.songs
        })
      }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.box{
    margin-top: 10px;
    margin-bottom: 10px;
}
.hot,.play{
    display: inline-block;
    width: 80px;
    /* height: 50px; */
    /* border: 1px solid green; */
    text-align: center;
    padding: 5px 6px 5px 6px;
}
.hot{
    color: green;
}
.play{
    background: green;
    color: white;
}
li {
  list-style: none;
  width: 250px;
  height: 45px;
  line-height: 45px;
  border: 1px black solid;
}
li span{
    margin-right: 10px;
}
a {
  text-decoration: none;
  color: rgb(134, 251, 251);
}

</style>