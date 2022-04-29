<template>
    <div class="content">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        
    </div>
    
  
</template>

<script>
export default {
    name:"myContent"
}
</script>

<style scoped>
.content{
      margin: 0 auto;
      padding-left: 210px;
      background-color: gray;
    }
</style>