<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="精选" name="first">精选
      <MyJingxuan_1/>
      <MyJingxuan_2 class="second"/>
      <myJingxuan3 class="float"/>
      <myJingxuan3 class="float middle"/>
      <myJingxuan3 class="float"/>
      <!-- <img src="../assets/首页.png" alt="" width="800px"> -->
    </el-tab-pane>
    <el-tab-pane label="榜单" name="second">榜单
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="纯音乐" name="third">纯音乐
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="分类" name="fourth">分类
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="专辑" name="fifth">专辑
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="FM" name="sixth">分类
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="视频" name="seventh">视频
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MyJingxuan_1 from '../First/MyJingxuan_1'
import MyJingxuan_2 from '../First/MyJingxuan_2.vue'
import MyJingxuan3 from '../First/MyJingxuan_3.vue'
export default {
    name:'myFirst',
    components:{
      MyJingxuan_1,MyJingxuan_2,MyJingxuan3
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
.second{
  position: absolute;
  top: 18px;
  right: 160px;
}
  .float{
      float: left;
  }
  .middle{
    margin: 0 50px 0 50px;
  }
</style>