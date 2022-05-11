<template>
  <div class="box">
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index">
        <a href="#" @click="geiSongListId(item.id)"
          ><img :src="item.coverImgUrl" alt="" width="60px" height="60px"
        /></a>
        <div>
          <p class="name">
            <a href="#" @click="geiSongListId(item.id)">{{
              item.creator.nickname
            }}</a>
          </p>
          <p class="detail">
            <span
              ><a href="#" @click="geiSongListId(item.id)">{{ item.name }}</a>
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { hearList } from "../network/finding";
export default {
  name: "myHear",
  data() {
    return {
      dataList: [],
    };
  },
  computed: {
    uid() {
      return localStorage.getItem("uid");
    },
  },
  created() {
    this.hearList(this.uid);
  },
  methods: {
    hearList(uid) {
      hearList(uid).then((res) => {
        console.log(res.playlist);
        this.dataList = res.playlist;
        //有歌单的id
      });
    },
    geiSongListId(id) {  //歌单id
      console.log(id);
      this.$router.push({
          path: "/myhearlistdetail",
          query: {
            id: id,
          },
        });
      
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.list {
  width: 900px;
  background: pink;
}
li {
  list-style: none;
  float: left;
  width: 409px;
  height: 80px;
  padding: 20px 20px 0;
  border-right: 1px solid black;
}
img {
  float: left;
}
.name {
  color: aqua;
  margin-left: 68px;
  margin-bottom: 16px;
}
.detail span {
  padding-right: 14px;
  padding-left: 10px;
  border-right: 1px solid black;
}
</style>