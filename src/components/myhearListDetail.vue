<template>
  <div>
    <!-- <el-table :data="tableData" stripe style="width: 80%">
      <el-table-column prop="name" label="歌名" width="180">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank" class="TestCSS" @click="getSongURLl(scope.row.id,scope.row.name)">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="al.name" label="专辑" width="180">
      </el-table-column>
      <el-table-column prop="alia" label="时长"> </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import{hearListDetail} from '../network/finding'
export default {
    name:'myhearListDetail',
    created() {
        this.hearListDetail(this.$route.query.id)
    },
    methods:{
        hearListDetail(id){
            hearListDetail(id).then(res =>{
                console.log(res.playlist.tracks)
            })
        }
    }
}
</script>

<style>

</style>