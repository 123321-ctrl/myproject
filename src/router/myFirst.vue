<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="精选" name="first">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <!-- <img src="../assets/首页.png" alt="" width="800px"> -->
      </el-tab-pane>

      <el-tab-pane label="榜单" name="second">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>

      <el-tab-pane label="纯音乐" name="third">纯音乐
        <img src="../assets/首页.png" alt="" width="800px" />
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="分类" name="fourth">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>

      <el-tab-pane label="专辑" name="fifth"
        >专辑
        <img src="../assets/首页.png" alt="" width="800px" />
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="FM" name="sixth"
        >分类
        <img src="../assets/首页.png" alt="" width="800px" />
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="视频" name="seventh"
        >视频
        <img src="../assets/首页.png" alt="" width="800px" />
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import jingXuan from "../First/jingxuan/jingXuan.vue";
// import bangDan from "../First/bangdan/bangDan";
// import fenLei from "../First/fenlei/fenLei";
export default {
  name: "myFirst",
  components: {
    // jingXuan,
    // bangDan,
    // fenLei,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if(tab.index == 0){
        this.$router.push({
          path:'/jingxuan'
        })
      }else if(tab.index == 1){
        this.$router.push({
          path:'/bangdan'
        })
      }else if(tab.index == 2){
        this.$router.push({
          path:'/chunyinyue'
        })
      }else if(tab.index == 3){
        this.$router.push({
          path:'/fenlei'
        })
      }else if(tab.index == 4){
        this.$router.push({
          path:'/zhuanji'
        })
      }else if(tab.index == 5){
        this.$router.push({
          path:'/FM'
        })
      }else if(tab.index == 6){
        this.$router.push({
          path:'/shipin'
        })
      }    
    },
  },
};
</script>

<style scoped>
</style>