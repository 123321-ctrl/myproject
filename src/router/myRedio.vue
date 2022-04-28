<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="精选" name="first">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <!-- <img src="../assets/首页.png" alt="" width="800px"> -->
      </el-tab-pane>

      <el-tab-pane label="节目" name="second">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>

      <el-tab-pane label="标签" name="third">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>

      <el-tab-pane label="nj" name="fourth">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "myRedio",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.$router.push({
          path: "/myRedio/jingxuan",
        });
      } else if (tab.index == 1) {
        this.$router.push({
          path: "/myRedio/jiemu",
        });
      } else if (tab.index == 2) {
        this.$router.push({
          path: "/myRedio/biaoqian",
        });
      } else if (tab.index == 3) {
        this.$router.push({
          path: "/myRedio/nj",
        });
      }
    },
  },
};
</script>

<style>
</style>