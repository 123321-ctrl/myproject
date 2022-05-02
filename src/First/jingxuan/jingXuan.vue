<template>
  <div>
      <MyJingxuan_1/>
      <MyJingxuan_2 class="second"/>
      <myJingxuan3 class="float" title="热播榜"  idNum="5001"/>
      <myJingxuan3 class="float middle" title="新曲榜" idNum="2008"/>
      <myJingxuan3 class="float" title="人气榜" idNum="10001"/>
  </div>
</template>

<script>
import MyJingxuan_1 from '../jingxuan/MyJingxuan_1.vue'
import MyJingxuan_2 from '../jingxuan/MyJingxuan_2.vue'
import MyJingxuan3 from '../jingxuan/MyJingxuan_3.vue'
export default {
    name:'jingXuan',
    components:{
        MyJingxuan_1,MyJingxuan_2,MyJingxuan3
    }
}
</script>

<style scoped>
.second{
  position: absolute;
  top: 18px;
  right: 160px;
}
  .float{
      float: left;
      margin-bottom: 60px;
  }
  .middle{
    margin: 0 50px 0 50px;
  }
</style>