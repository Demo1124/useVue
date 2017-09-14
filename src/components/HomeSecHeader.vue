<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="loginname">
        <h2  style="text-align: left;">{{loginuser[0].loginname}}的QQ空间</h2>
        </div>
        <div class="headlink">
        <img :src="loginuser[0].img" class="avatar img-rounded img-responsive" style="width: 90px;height: 90px"/>
        <h4  style="text-align: left">{{loginuser[0].loginname}}</h4>
        <ul class="nav navbar-nav">
          <li><router-link to="">主页</router-link></li>
          <li><router-link to="">日志</router-link></li>
          <li><router-link to="">相册</router-link></li>
          <li><router-link to="">留言板</router-link></li>
          <li><router-link to="">说说</router-link></li>
          <li><router-link to="">个人档</router-link></li>
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loginuser:[]
      }
    },
    created () {
      this.$http.get('/api/loginuser').then((data) => {
        this.loginuser = data.body.data;
      })
    }
  }
</script>
<style>
  #headul li{
    float: left;
    margin: 0 10px;
  }
</style>
