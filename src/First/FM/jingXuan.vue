<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <a href="#">
          <img :src="item.picUrl" alt="" width="100px" height="100px" />
        </a>
        <p class="name">{{ item.name }}</p>
        <p class="artist">
          <a href="" @click="artistList(item.program.radio.id)">{{
            item.program.mainSong.album.artist.name
          }}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRedioId } from "../../network/finding";
export default {
  name: "jingXuan",
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getRedioId();
  },
  methods: {
    getRedioId() {
      getRedioId().then((res) => {
        this.data = res.result;
      });
    },
    artistList(rid) {
      this.$router.push({
        path:'',
        query:{
          rid:rid
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img {
  float: left;
  background-color: pink;
  margin-right: 5px;
}
li {
  width: 695px;
  clear: both;
  list-style: none;
  margin-bottom: 30px;
  border-bottom: 2px solid white;
}

.name {
  color: green;
  padding-top: 57px;
}
.artist {
  font-size: 15px;
}
</style>