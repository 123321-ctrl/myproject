<template>
  <div >
    <div class="box"><span class="hot">{{title}}</span> <span class="play">播放榜单</span></div>
    <ul v-if="title === '热播榜'">
      <li v-for="(item,index) in hotData" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
    <ul v-if="title === '新曲榜'">
      <li v-for="(item,index) in newData" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
    <ul v-if="title === '人气榜'">
      <li v-for="(item,index) in listenData" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import {denglu,getHotData,getNewData,getListenData,} from '../network/finding'
// getHotData,getNewData,getListenData,
export default {
  name: "MyJingxuan3",
  props:['title'],
  data(){
    return{
      hotData:[],
      newData:[],
      listenData:[]
    }
  },
  created(){
      this.getHotData()
      this.getNewData()
      this.getListenData()
      this.denglu()
  },
  methods:{
      getHotData(){
        getHotData().then(res =>{
          // console.log("热播榜" + res);
          this.hotData = res.songs
        })
      },
      getNewData(){
        getNewData().then(res =>{
          this.newData = res.songs
        })
      },
      getListenData(){
        getListenData().then(res =>{
          // console.log("人气" + res);
          this.listenData = res.songs
        })
      },
      denglu(){
        denglu().then(res => {
          console.log(res)
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