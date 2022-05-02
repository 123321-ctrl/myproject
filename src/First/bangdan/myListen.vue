<template>
  <div class="box">
      <p>热播排行榜</p>
      <ul>
      <li v-for="(item,index) in listenData" :key="index"><span>{{index + 1}}</span> <a href="#">{{item.name}}</a><img src="#" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import {getHotData} from '../../network/finding'
export default {
  name:'myLike',
  data(){
    return{
      listenData:[],
      id:2008
    }
  },
  created(){
    this.getHotData(this.id)
  },
  methods:{
    getHotData(id){
      getHotData(id).then(res =>{
        // console.log(res)
        this.listenData = res.songs
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