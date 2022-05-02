<template>
  <div >
    <div class="box"><span class="hot">{{title}}</span> <span class="play">播放榜单</span></div>
    <ul>
      <li v-for="(item,index) in hotData" :key="index"><span>{{index + 1}}</span> <a href="#" @click="getSongId(item.id,item.name)">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import {getHotData,getSongUrl} from '../../network/finding'
// getHotData,getNewData,getListenData,
export default {
  name: "MyJingxuan3",
  props:['title',"idNum"],
  data(){
    return{
      hotData:[],
    }
  },
  created(){
      this.getHotData(this.idNum)
  },
  methods:{
      getHotData(idNum){
        getHotData(idNum).then(res =>{
          // console.log( res);
          this.hotData = res.songs
        })
      },
      getSongId(id,name){   //点击歌名获取歌曲id
        getSongUrl(id).then(res =>{  //根据id获取url
          console.log(res.data[0].url)   //得到url
          if(res.data[0].url != null){
            this.$bus.$emit('sendUrl',res.data[0].url,name)
          }
          else{
            alert("该歌曲找不到wwww")
          }
        })
      }
      // getNewData(){
      //   getNewData().then(res =>{
      //     this.newData = res.songs
      //   })
      // },
      // getListenData(){
      //   getListenData().then(res =>{
      //     console.log("人气" + res);
      //     this.listenData = res.songs
      //   })
      // },
      
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
  overflow: hidden;
}
li span{
    margin-right: 10px;
}
a {
  text-decoration: none;
  color: rgb(134, 251, 251);
}

</style>