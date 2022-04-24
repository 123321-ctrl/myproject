<template>
  <div class="box">
      <p>新曲排行榜</p>
      <ul>
      <li v-for="(item,index) in newData" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import {getNewData} from '../../network/finding'
export default {
  name:'myLike',
  data(){
    return{
      newData:[]
    }
  },
  created(){
    this.getNewData()
  },
  methods:{
    getNewData(){
      getNewData().then(res =>{
        // console.log(res)
        this.newData = res.songs
      })
    }
  }
}
</script>

<style scoped>
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.box{
  margin-left: 20px;
}
p{
  font-size: 25px;
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