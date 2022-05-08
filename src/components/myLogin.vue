<template>
  <div class="box">
    <input type="text" v-model="textVal" placeholder="请输入手机号码" />
    <input type="password" v-model="psdVal" placeholder="请输入密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { denglu } from "../network/finding";
export default {
  name: "myLogin",
  data() {
    return {
      textVal: "",
      psdVal: "",
    };
  },
  methods: {
    login() {
      denglu(this.textVal, this.psdVal).then((res) => {
        // console.log(res.token);
        localStorage.setItem('token',res.token)
        localStorage.setItem('uid',res.account.id)
        alert('登录成功')
        this.$bus.$emit('login')
        this.$router.push({
            path:'/'
        })
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 250px;
  height: 100px;
  margin: 80px 260px;
}
input{
    width: 250px;
    height: 25px;
    border-radius: 8px;
    margin-top: 5px;
}
button{
    width: 50px;
    height: 25px;
    border-radius: 5px;
    margin: 5px 100px;
}
</style>