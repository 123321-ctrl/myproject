<template>
  <div>
    <div class="pic">
      <a href="">
        <img src="" alt="" />
      </a>
    </div>
    <div class="detail">
      <p>专辑名字</p>
      <p>歌手</p>
      <p>发行时间</p>
      <p>公司</p>
    </div>
    <div class="jieshao">
      <p>简介</p>
    </div>
    <div>
      <el-table :data="tableData" stripe style="width: 80%">
        <el-table-column prop="name" label="歌曲标题" width="180">
          <!-- <template slot-scope="scope"> -->
            <!-- <a
              :href="scope.row.url"
              target="_blank"
              class="TestCSS"
              @click="getSongURLl(scope.row.id, scope.row.name)"
              >{{ scope.row.name }}</a
            > -->
          <!-- </template> -->
        </el-table-column>
        <el-table-column prop="ar[0].name" label="歌手" width="180">
        </el-table-column>
        <el-table-column prop="alia" label="时长"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getzhuangjiDetail} from '../network/finding'
export default {
  name: "zhuanjiDetail",
  data() {
    return {
      zhuanjiSongs:[]
    };
  },
  created(){
    this.getzhuangjiDetail(this.$route.query.albumId)
  },
  methods:{
    getzhuangjiDetail(albumId){
      getzhuangjiDetail(albumId).then(res =>{
        console.log(res.songs)
      })
    }
  }
};
</script>

<style>
</style>