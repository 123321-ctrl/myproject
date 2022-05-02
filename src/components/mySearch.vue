<template>
  <div>
    <div class="search">
      <input type="text" name="" id="" v-model="value"/>
      <button @click="chilcIt">search</button>
    </div>

    <div class="show">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="单曲" name="first">
          <ul class="songs">
            <li v-for="(item, index) in data1" :key="index">
              <a href="#" class="name">{{ item.name }}</a>
              <a href="" class="actor">{{ item.artists[0].name }}</a>
              <a href="" class="albums">{{item.album.name}}</a>
              <span>{{item.duration}}</span>
            </li>
          </ul>
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
        </el-tab-pane>

        <el-tab-pane label="歌手" name="second">
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
        </el-tab-pane>

        <el-tab-pane label="专辑" name="third">
          <img src="../assets/首页.png" alt="" width="800px" />
          <!-- <router-view></router-view> -->
        </el-tab-pane>

        <el-tab-pane label="视频" name="fourth">
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
        </el-tab-pane>

        <el-tab-pane label="歌词" name="fifth">
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
        </el-tab-pane>

        <el-tab-pane label="歌单" name="sixth">
          <img src="../assets/首页.png" alt="" width="800px" />
          <!-- <router-view></router-view> -->
        </el-tab-pane>

        <el-tab-pane label="声音主播" name="seventh">
          <img src="../assets/首页.png" alt="" width="800px" />
          <!-- <router-view></router-view> -->
        </el-tab-pane>

        <el-tab-pane label="用户" name="eighth">
          <img src="../assets/首页.png" alt="" width="800px" />
          <!-- <router-view></router-view> -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getSearchValue } from "../network/finding";
export default {
  name: "mySearch",
  data() {
    return {
      activeName: 'first',
      value:this.$route.query.val,
      data1: [],
    };
  },
  created(){
    this.getSearchValue(this.value);
  },
  
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    
    getSearchValue(value) {
      getSearchValue(value).then((res) => {
        console.log(res.result.songs)
        this.data1 = res.result.songs;
      });
    },
    chilcIt(){
      this.$bus.$emit('search',this.value)
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.search {
  width: 544px;
  margin: 0 auto;
  padding: 10px 0;
}
input {
  width: 320px;
  height: 30px;
}
button {
  width: 50px;
  height: 30px;
}
.songs li{
  list-style: none;
  padding: 10px 10px 8px 18px;
}
.songs a {
  display: inline-block;
  text-decoration: none;
  color: black;
}
.songs .name {
  width: 335px;
}
.songs .actor {
  width: 210px;
}
.songs .albums {
  width: 236px;
}
</style>