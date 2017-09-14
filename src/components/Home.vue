<template>
  <div id="wrapper">
    <home-header></home-header>
    <home-sec-header></home-sec-header>
    <div class="container">
      <div class="col-sm-3">
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
