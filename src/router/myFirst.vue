<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="精选" name="first">精选
      <MyJingxuan_1/>
      <MyJingxuan_2 class="second"/>
      <myJingxuan3 class="float" title="热播榜" />
      <myJingxuan3 class="float middle" title="新曲榜" />
      <myJingxuan3 class="float" title="人气榜" />
      <!-- <img src="../assets/首页.png" alt="" width="800px"> -->
    </el-tab-pane>
    <el-tab-pane label="榜单" name="second">
      <bangDan/>
    </el-tab-pane>
    <el-tab-pane label="纯音乐" name="third">纯音乐
      <img src="../assets/首页.png" alt="" width="800px">
    </el-tab-pane>
    <el-tab-pane label="分类" name="fourth">
      <fenLei/>
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
import bangDan from '../First/bangdan/bangDan'
import fenLei from '../First/fenlei/fenLei'
export default {
    name:'myFirst',
    components:{
      MyJingxuan_1,MyJingxuan_2,MyJingxuan3,bangDan,fenLei
    },
    data() {
      return {
        activeName: 'first',
        
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