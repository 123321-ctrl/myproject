<template>
  <div>
    <p>排行榜</p>
    <MyJingxuan_3 class="float left" />
    <MyJingxuan_3 class="float" />
  </div>
</template>

<script>
import MyJingxuan_3 from '../jingxuan/MyJingxuan_3.vue'
export default {
  name:'myAll',
  components:{MyJingxuan_3}

}
</script>

<style scoped>
  .float{
    float: left;
  }
  .left{
    margin: 0 80px 0 50px;
  }
  p{
    font-size: 25px;
    margin-left: 50px;
  }
</style>