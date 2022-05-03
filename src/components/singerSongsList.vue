<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="song" label="歌名" width="180"> </el-table-column>
      <el-table-column prop="singer" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="message" label="信息"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getSingerSongs} from '../network/finding'
export default {
  name: "singerSongsList",
  created(){
      this.getSingerSongs(this.$route.query.id)
  },
  data() {
    return {
      tableData: [
        {
          song: "2016-05-02",
          singer: this.$route.query.id,
          message: "上海市普陀区金沙江路 1518 弄",
        },
        {
          song: "2016-05-04",
          singer: "王小虎",
          message: "上海市普陀区金沙江路 1517 弄",
        },
        {
          song: "2016-05-01",
          singer: "王小虎",
          message: "上海市普陀区金沙江路 1519 弄",
        },
        {
          song: "2016-05-03",
          singer: "王小虎",
          message: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods:{
      getSingerSongs(id){
          getSingerSongs(id).then(res =>{
              console.log(res.songs)
          })
      }
  }
};
</script>

<style>
</style>