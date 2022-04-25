<template>
  <div class="box">
    <div class="find">发现音乐</div>
    <div class="content">
      <span v-for="(item,index) in list" :key="index"><a href="#">{{item.name}}</a></span>
    </div>
  </div>
</template>

<script>
import { getPlaylistHot } from "../../network/finding";
export default {
  name: "MyJingxuan_2",
  data(){
      return{
          list:[]
      }
  },
  created() {
    this.getPlaylistHot();
  },
  methods: {
    getPlaylistHot() {
      getPlaylistHot().then((res) => {
        // console.log(res);
        this.list = res.tags
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
}
.find {
  color: green;
  width: 80px;
  text-align: center;
}
.content {
    margin-top: 5px;
  /* background-color: pink; */
  width: 325px;
}
span{
    display: inline-block;
    text-align: center;
    width: 106px;
    /* margin-right: 10px; */
    height: 30px;
    line-height: 30px;
    /* border: black 1px solid; */
}
</style>