<template>
  <div class="list-group"style="width: 80%;">
    <div class="row">
      <div class="col-sm-12" id="headinput">
        <textarea  class="input" id="saytext" name="saytext" @click="show = !show " placeholder="说点什么吧" align="top" style="width: 70%;height: 70px;float:left;background-color: #2e2e2e;color:white;border: none;resize: none;" v-model="inputthing"></textarea>
        <img class="emotion" src="../assets/11.png" style="float:left;height: 70px;width: 10%"/>
        <i class="glyphicon glyphicon-camera"></i>
        <i class="glyphicon glyphicon-link"></i>
        <transition name="slide-fade">
        <button  type="submit" class="btn btn-default"  @click="save()" style="margin-top: 0;float: right;background-color: #2e2e2e;color:white;width: 10%;border: none;" v-if="show" >发表</button>
        </transition>
      </div>
    </div>
    <a class="list-group-item" v-for="(mycontent,index) in mycontents" style="background-color: #2e2e2e;border: none;margin: 10px 0" >
      <div class="row" >
        <div class="col-sm-3">
          <img :src="mycontent.img" class="img-circle img-responsive" style="width: 70px; height: 70px;float: left"/>
          <div style="padding-top: 10px">
            <span style="float: left;margin-left: 10px; color: #a6a6a6;">
              {{ mycontent.name }}
            </span>
          <br>
          <span style="float: left;margin-left: 10px;font-size: 0.8em;color:#94998a">
              {{ mycontent.date }}
            </span>
          </div>
        </div>

        <div class="col-sm-12">
          <h3 class="list-group-item-text" style="text-align: left;color:#94998a">
            {{ mycontent.content }}
          </h3>
          <div style="float: right;" class="contentbtn">
            <!--<button  class=" btn-lg"><i class="glyphicon glyphicon-thumbs-up" @click="add"></i></button>-->
            <like-counter class=" btn-lg"></like-counter>
            <test ></test>
            <button class=" btn-lg"><i class="glyphicon glyphicon-comment"></i></button>
            <button class=" btn-lg"><i class="glyphicon glyphicon-share-alt"></i></button>
          </div>
        </div>
      </div>
        <div class="input-group" >
          <input type="text" class="form-control" style="background-color: #2e2e2e;border-right: none" placeholder="评论">
          <div class="input-group-addon" style="background-color:#2e2e2e;border-left: none" ><i class="glyphicon glyphicon-camera" ></i></div>
        </div>
    </a>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'jquery'
  import Vue from 'vue'
  import '../assets/jquery.qqFace.js'
  $(function(){

    $('.emotion').qqFace({

      id : 'facebox',

      assign:'saytext',

      path:'../static/arclist/'	//表情存放的路径

    });

    $(".sub_btn").click(function(){

      var str = $("#saytext").val();

      $("#show").html(replace_em(str));

    });

  });

  //查看结果

  function replace_em(str){

    str = str.replace(/\</g,'&lt;');

    str = str.replace(/\>/g,'&gt;');

    str = str.replace(/\n/g,'<br/>');

    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="arclist/$1.gif" border="0" />');

    return str;

  }

export default {
    data() {
      return {
        inputthing:'',
        show:false,
    }
    },computed : {
      mycontents () {
        // 从store中取出数据
        return this.$store.state.list
      }
    },
    methods:{
      save(){
        if(this.inputthing){
          this.$store.dispatch('savething',this.inputthing);
          this.inputthing=''
        }
        else{
          alert("请填写内容！")
        }
      }
    }
  }
  var Event = new Vue();

  Vue.component('like-counter', {
    template: '<button v-on:click="addlike"><i class="glyphicon glyphicon-thumbs-up" ></i><span v-if="counter"></span></button>',
    data: function () {
      return {counter:0}
    },methods:{
      addlike:function(){
        Event.$emit('doaddlike',this.counter+1);
      }
    }
  })

  Vue.component('test', {
    template: '<input>{{ testcount }}</input>',
    data:function(){return {testcount:''}},
    mounted:function(){
      Event.$on('doaddlike',function(data){
        this.testcount = data;
      })
    }
  })
</script>
<style>
  .contentbtn > button{
    margin-left: 20px;
    background-color:  #2e2e2e;
    border: none;
  }
  .glyphicon{
    color:#94998a;
  }
  .glyphicon:hover{
    color:white;
  }

  .emotion,#headinput > i{
    font-size:30px;
    background-color:#2e2e2e;
    line-height: 70px;
    float:left;
    width: 10%;
    margin-top: -1px;
  }

  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .comment { width: 680px; margin: 20px auto; position: relative; background: #fff; padding: 20px 50px 50px; border: 1px solid #DDD; border-radius: 5px; }
  .comment h3 { height: 28px; line-height: 28px }
  .com_form { width: 100%; position: relative }
  .input { width: 99%; height: 60px; border: 1px solid #ccc }
  .com_form p { height: 28px; line-height: 28px; position: relative; margin-top: 10px; }
  img.emotion {  cursor: pointer }
  img.emotion:hover { background-position: 2px -28px }
  .qqFace { margin-top: 4px; background: #fff; padding: 2px; border: 1px #dfe6f6 solid; }
  .qqFace table td { padding: 0px; }
  .qqFace table td img { cursor: pointer; border: 1px #fff solid; }
  .qqFace table td img:hover { border: 1px #0066cc solid; }
  #show { width: 770px; margin: 20px auto; background: #fff; padding: 5px; border: 1px solid #DDD; vertical-align: top; }
  .sub_btn { position: absolute; right: 0px; top: 0; display: inline-block; zoom: 1; /* zoom and *display = ie7 hack for display:inline-block */  *display: inline;
    vertical-align: baseline; margin: 0 2px; outline: none; cursor: pointer; text-align: center; font: 14px/100% Arial, Helvetica, sans-serif; padding: .5em 2em .55em; text-shadow: 0 1px 1px rgba(0,0,0,.6); -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2); -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2); box-shadow: 0 1px 2px rgba(0,0,0,.2); color: #e8f0de; border: solid 1px #538312; background: #64991e; background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e)); background: -moz-linear-gradient(top, #7db72f, #4e7d0e);  filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#7db72f', endColorstr='#4e7d0e');
  }
  .sub_btn:hover { background: #538018; background: -webkit-gradient(linear, left top, left bottom, from(#6b9d28), to(#436b0c)); background: -moz-linear-gradient(top, #6b9d28, #436b0c);  filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#6b9d28', endColorstr='#436b0c');
  }

</style>
