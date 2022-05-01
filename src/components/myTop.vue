<template>
  <div class="top">
    <img src="../assets/logo1.png" alt="" />
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/myRedio">电台</router-link>
      </li>
      <li><router-link to="/myHear">听说</router-link></li>
      <li><router-link to="/riZhi">日志</router-link></li>
      <li><router-link to="/kehuDuan">客户端</router-link></li>
    </ul>
    <input type="text" placeholder="搜索音乐、专辑、听友" v-model="songValue" @keyup.enter="clickit"/>
  </div>
</template>

<script>
export default {
  name: "myTop",
  props: {},
  data(){
    return{
      songValue:''
    }
  },
  methods:{
    clickit(){
      console.log(this.songValue)
      this.$router.push({
        path:'/search',
        query:{
          val:this.songValue
        }
      })
    }
  },
  mounted(){
    this.$bus.$on('search',(data) =>{
      console.log("hhhh" + data)
      this.songValue = data
    })
  },
  beforeDestroy(){
    this.$bus.$off('search')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  background-color: rgb(98, 98, 98);
  width: 1066px;
  height: 61px;
  padding-left: 210px;
}
img {
  width: 135px;
  height: 60px;
  position: absolute;
  top: 10px;
}
ul {
  list-style: none;
  margin-left: 135px;
  height: 61px;
  line-height: 61px;
}
li {
  float: left;
  margin-left: 30px;
}
li a {
  color: white;
  text-decoration: none;
}
input {
  position: absolute;
  top: 14px;
  right: 208px;
  width: 357px;
  height: 46px;
  border-radius: 5px;
}
</style>
