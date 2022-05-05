<template>
  <div>
    <div class="pic">
      <a href="">
        <img :src="zhuanjiAlbum.blurPicUrl" alt="" />
      </a>
    </div>
    <div class="detail">
      <h2>{{zhuanjiAlbum.name}}</h2>
      <p class="intr">歌手： {{zhuanjiAlbum.artist.name}}</p>
      <p class="intr">发行时间： {{zhuanjiAlbum.publishTime}}</p>
      <p class="intr">发行公司： {{zhuanjiAlbum.company}}</p>
    </div>
    <div class="jieshao">
      <h3>专辑介绍：</h3>
      <p class="description">{{zhuanjiAlbum.description}}</p>
    </div>
    <div>
      <el-table :data="tableData" stripe style="width: 80%;">
        <el-table-column prop="name" label="歌曲标题" width="380">
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
        <el-table-column prop="ar[0].name" label="歌手">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getzhuangjiDetail,getSongUrl} from '../network/finding'
export default {
  name: "zhuanjiDetail",
  data() {
    return {
      tableData:[],
      zhuanjiAlbum:{}
    };
  },
  created(){
    this.getzhuangjiDetail(this.$route.query.albumId)
  },
  methods:{
    getzhuangjiDetail(albumId){
      getzhuangjiDetail(albumId).then(res =>{
        // console.log(res.songs)
        this.tableData = res.songs
        this.zhuanjiAlbum = res.album
      })
    },
    getSongURLl(id,name){
      console.log("你点了" + id)
      getSongUrl(id).then(res =>{
        if(res.data[0].url != null){
            this.$bus.$emit('sendUrl',res.data[0].url,name)  //该事件在playSong.vue上
          }
          else{
            alert("该歌曲找不到wwww")
          }
      })
    }
  }
};
</script>

<style scoped>
.pic{
  float: left;
}
img{
  width: 177px;
  height: 177px;
}
.detail{
  margin-left: 208px;
}
h2{
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.intr{
  margin-top: 4px;
  line-height: 18px;
  color: #666;
}
.jieshao{
  clear: both;
  margin-top: 67px;
}
.description{
  width: 846px;
  line-height: 34px;
}
.TestCSS:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>