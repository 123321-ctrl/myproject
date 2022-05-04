<template>
  <div>
    <p>乐队</p>
    <ul>
      <li v-for="(item, index) in singers" :key="index">
        <a href="#" @click="getSingerId(item.id)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSinger,getSingerSongs } from "../../network/finding";
export default {
  name: "myAll",
  data() {
    return {
      singers: [],
      type: 3,
    };
  },
  created() {
    this.getSinger(this.type);
  },
  methods: {
    getSinger(type) {
      getSinger(type).then((res) => {
        // console.log(res)
        this.singers = res.artists;
      });
    },
    getSingerId(id) {  //此id为歌手的id
      getSingerSongs(id).then((res) => {
        console.log(res.songs);  //得到此歌手的所有歌曲
        this.$router.push({
          path: "/singersongslist",
          query: {
            id: id,
          },
        });
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
p {
  font-size: 25px;
  margin: 10px 7px;
}
li {
  text-align: left;
  color: green;
  display: inline-block;
  width: 143px;
  margin: 10px;
  list-style: none;
}
a {
  text-decoration: none;
  color: green;
}
a:hover{
  text-decoration: underline;
}
</style>