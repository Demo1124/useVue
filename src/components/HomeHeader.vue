<template>
  <div id="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top" >
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to="/home"><i class="glyphicon glyphicon-user"></i>个人中心</router-link></li>
          <li><router-link to="/time-entries"><i class="glyphicon glyphicon-home"></i>我的主页</router-link></li>
          <li><router-link to="/time-entries"><i class="glyphicon glyphicon-user"></i><i class="glyphicon glyphicon-user" style="left:-7px"></i>好友</router-link></li>
          <li><router-link to="/time-entries"><i class="glyphicon glyphicon-th-large"></i>游戏</router-link></li>
          <li><router-link to="/time-entries"><i class="glyphicon glyphicon-sunglasses"></i>装扮</router-link></li>
        </ul>
        <form class="navbar-form navbar-left" style="margin-left: 20%">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="用户/游戏/动态">
            <div class="input-group-addon"><a> <i class="glyphicon glyphicon-search"></i></a></div>
          </div>
        </form>
        <ul class="nav navbar-nav">
          <li><router-link to="/time-entries"><i class="glyphicon glyphicon-log-out"></i></router-link></li>
          <li><router-link to="/time-entries"><i class=" glyphicon glyphicon-cog"></i></router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
  }
</script>

