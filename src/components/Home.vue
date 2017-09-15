<template>
  <div id="wrapper">
    <home-header></home-header>
    <home-sec-header></home-sec-header>
    <div class="container" id="container">
      <div class="col-sm-2" style="padding:0;">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <my-content></my-content>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader.vue'
import Sidebar from '../components/Sidebar.vue'
import MyContent from '../components/MyContent.vue'
import HomeSecHeader from '../components/HomeSecHeader.vue'
  export default {
    components:{
      HomeHeader,
      Sidebar,
      MyContent,
      HomeSecHeader
    }
  }
</script>
<style>
  /*#container{*/
    /*background-color: #e9e9e9;*/
  /*}*/
  body{
    background: url("../../static/10.png") fixed no-repeat;
    background-size: 100%;

  }
</style>
