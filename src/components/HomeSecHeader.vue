<template>
  <div id="wrapper">
    <nav class="navbar navbar-default" style="margin:0;background-color: rgba(1,1,1,0);border: none">
      <div class="container">
        <div v-if="loginuser[0]" >
          <div class="loginname">
            <h2  style="text-align: left;color:#7aa621">{{loginuser[0].loginname}}的QQ空间</h2>
          </div>
          <div class="headlink" style="margin-top: 80px">
            <img :src="loginuser[0].img" class=" img-rounded img-responsive" style="width: 90px;height: 90px;float:left;"/>
            <h4 style="text-align: left;padding:30px 0 0 110px;color:#7aa621">{{loginuser[0].loginname}}</h4>
          </div>
        </div>
        <ul class="nav navbar-nav" style="padding-left: 20px;color:#080504">
          <li><router-link to="">主页</router-link></li>
          <li><router-link to="">日志</router-link></li>
          <li><router-link to="">相册</router-link></li>
          <li><router-link to="">留言板</router-link></li>
          <li><router-link to="">说说</router-link></li>
          <li><router-link to="">个人档</router-link></li>
        </ul>
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
