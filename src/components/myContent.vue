<template>
  <div class="content">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view> </router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "myContent",
};
</script>

<style scoped>
.content {
  margin: 0 auto;
  padding-left: 210px;
  background-color: gray;
}
.fade-enter-aactive,
.fade-leave-active{
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}
</style>