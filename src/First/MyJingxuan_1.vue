<template>
  <div class="border">
    <div class="img"><img :src="picUrl" alt="" /></div>
    <div class="right">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a href="#" @mouseenter="enter(item.picUrl)">{{ item.name }}</a>
        </li>
        <!-- <li><a href="#">人世间</a></li>
              <li><a href="#">人世间</a></li>
              <li><a href="#">人世间</a></li>
              <li><a href="#">人世间</a></li> -->
      </ul>
    </div>
    <el-pagination layout="prev, pager, next" :total="50" class="page"> </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyJingxuan_1",
  data() {
    return {
      items: [],
      picUrl: ""
    };
  },
  methods: {
    enter(picUrl) {
      this.picUrl = picUrl;
    },
  },
  created() {
    axios({
      // url:'http://localhost:3000//personalized/newsong',
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get",
      params: {
        limit: 5,
      },
    }).then((res) => {
      // console.log(res);
      this.items = res.data.result;
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.border {
  width: 533px;
  height: 307px;
  border: 2px solid black;
  padding: 5px 5px 5px 10px;
}
.img {
  /* background: red; */
  width: 300px;
  height: 225px;
  display: inline-block;
}
.img img {
  width: 100%;
  height: 100%;
}
.right {
  float: right;
}
li {
  width: 189px;
  height: 45px;
  line-height: 45px;
  list-style: none;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}
a {
  text-decoration: none;
}
.page{
    position: absolute;
    top: 258px;
    left: 279px;
}
</style>