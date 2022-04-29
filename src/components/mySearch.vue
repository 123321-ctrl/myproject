<template>
  <div>
    <div class="search">
      <input type="text" name="" id="" :value="value"/>
      <button>search</button>
    </div>

    <div class="show">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="单曲" name="first">
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
    <p>{{$route.query.val}}</p>
  </div>
</template>

<script>
export default {
  name: "mySearch",
//   data(){
//       return{
//           value:this.$route.query.val
//       }
//   },
  computed:{
      value(){
          return this.$route.query.val
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
</style>