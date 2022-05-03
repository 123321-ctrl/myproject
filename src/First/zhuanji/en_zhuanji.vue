<template>
  <div class="box">
    <p class="title">欧美专辑</p>
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <a href="#">
          <img
            :src="item.coverUrl"
            alt=""
            width="130px"
            height="130px"
          />
        </a>
        <p class="name">{{item.albumName}}</p>
        <p style="fontSize:15px" class="artistName">{{item.artistName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getzhuangji} from '../../network/finding'
export default {
  name: "en_zhuanji",
  data(){
    return{
      data:[],
      area:'E_A'
    }
  },
  created(){
    this.getzhuangji(this.area)
  },
  methods:{
    getzhuangji(area){
      getzhuangji(area).then(res =>{
        console.log(res.albumProducts)
        this.data = res.albumProducts
      })
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title{
    font-size: 25px;
    margin: 10px 7px;
}
.box{
  width: 100%;
}
li {
  list-style: none;
  display: inline-block;
  width: 130px;
  height: 180px;
  margin: 20px 80px 0 0;
}
.name{
  color: green;
  width: 100%;
  height: 20px;
  overflow: hidden;
}
.artistName{
  width: 100%;
  height: 20px;
  overflow: hidden;
}
</style>