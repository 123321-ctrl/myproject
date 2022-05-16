<template>
  <div>
    <el-table :data="tableData" stripe style="width: 80%">
      <el-table-column prop="id" label="歌名" width="180">
        <template slot-scope="scope">
          <a
            :href="scope.row.url"
            target="_blank"
            class="TestCSS"
            @click="getSongURLl(scope.row.id, scope.row.name)"
            >{{ scope.row.name }}</a
          >
        </template>
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="al.name" label="专辑" width="180">
      </el-table-column>
      <el-table-column prop="dt" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { hearListDetail,getSongUrl } from "../network/finding";
export default {
  name: "myhearListDetail",
  data() {
    return {
      // data:'24381616',
      tableData: [],
    };
  },
  props:['scope'],
  created() {
    this.hearListDetail(this.$route.query.id);
    // this.hearListDetail(this.data)
  },
  methods: {
    hearListDetail(id) {
      hearListDetail(id).then((res) => {
        console.log(res.playlist.tracks)
        this.tableData = res.playlist.tracks;
      });
    },
    getSongURLl(id, name) {
      console.log("你点了" + id);
      getSongUrl(id).then((res) => {
        if (res.data[0].url != null) {
          this.$bus.$emit("sendUrl", res.data[0].url, name); //该事件在playSong.vue上
        } else {
          alert("该歌曲找不到wwww");
        }
      });
    },
  },
};
</script>

<style scoped>
a{
  cursor: pointer;
}
</style>