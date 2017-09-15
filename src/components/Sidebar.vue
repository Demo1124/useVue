<template>
  <div class="panel panel-default" style="width: 150px;background-color: #2e2e2e;border: none">
    <div class="panel-body">
      <ul class="nav nav-pills nav-stacked" >
        <li><router-link to="/time-entries"><i class="glyphicon glyphicon-user"></i><i class="glyphicon glyphicon-user" style="left:-7px"></i>好友动态</router-link></li>
        <li><router-link to="/time-entries"><i class="glyphicon glyphicon-heart-empty"></i>特别关心</router-link></li>
        <li><router-link to="/time-entries"><i class="glyphicon glyphicon-record"></i>与我相关</router-link></li>
        <li><router-link to="/time-entries"><i class="glyphicon glyphicon-calendar"></i>那年今日</router-link></li>
        <li><router-link to="/time-entries"><i class="glyphicon glyphicon-th-large"></i>游戏应用</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }

</script>

