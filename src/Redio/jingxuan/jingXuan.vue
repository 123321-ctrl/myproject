<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <a href="#">
          <img :src="item.picUrl" alt="" width="100px" height="100px" />
        </a>
        <p class="name">{{ item.name }}</p>
        <p class="copywriter">{{ item.copywriter }}</p>
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
      getRedioId().then(res =>{
        this.data = res.result
      })
    },
    
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img {
  float: left;
  background-color: pink;
  margin-right: 5px;
}
li{
  clear: both;
  list-style: none;
  margin-bottom: 30px;
  border-bottom: 2px solid white;
}

.name{
  color: green;
  padding-top: 57px;
}
.copywriter{
  font-size: 15px;
}
</style>