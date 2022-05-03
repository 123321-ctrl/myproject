<template>
  <div>
    <p>女音乐人</p>
      <ul>
          <li v-for="(item,index) in singers" :key="index"><a href="#">{{item.name}}</a></li>
      </ul>
  </div>
</template>

<script>
import {getSinger} from '../../network/finding'
export default {
    name:'femaleSinger',
    data(){
        return{
            singers:[],
            type:2
        }
    },
    created(){
        this.getSinger(this.type)
    },
    methods:{
        getSinger(type){
            getSinger(type).then(res => {
                // console.log(res)
                this.singers = res.artists
            })
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
p{
    font-size: 25px;
    margin: 10px 7px;
}
li{
    text-align: left;
    color: green;
    display: inline-block;
    width: 143px;
    margin: 10px;
    list-style: none;
}
a{
    text-decoration: none;
    color: green;
}
</style>