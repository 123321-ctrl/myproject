<template>
  <div class="box">
    <div class="wrap">
        <span>{{name}}</span>
        <div>
            <audio
              :src="url"
              controls
              autoplay
            ></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playSong",
  data(){
      return{
          url:'',
          name:''
      }
  },
  mounted(){
      this.$bus.$on('sendUrl',(url,name)=>{
          this.url = url,
          this.name = name
      })
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.box {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: pink;
}
.wrap {
  position: relative;
  width: 850px;
  /* height: 100px; */
  margin-left: 209px;
}
audio{
    width: 850px;
}
</style>