<template>
  <div class="list-group">
    <div class="row">
      <div class="col-sm-12">
        <textarea  placeholder="说点什么吧" align="top" style="width: 100%;height: 70px" v-model="inputthing"></textarea>
        <button type="submit" class="btn btn-primary"  @click="save()" style="margin-top: 0;float: right;">发表</button>
      </div>
    </div>
    <a class="list-group-item" v-for="(mycontent,index) in mycontents">
      <div class="row">
        <div class="col-sm-2">
          <img :src="mycontent.img" class="img-circle img-responsive" />
          <p class="text-center">
            <strong>
              {{ mycontent.name }}
            </strong>
          </p>
        </div>

        <div class="col-sm-10 text-center time-block">
          <h3 class="list-group-item-text total-time">
            {{ mycontent.content }}
          </h3>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
//        mycontents:[],
        inputthing:''
    }
    },computed : {
      mycontents () {
        // 从store中取出数据
        return this.$store.state.list
      }
    },
//    created () {
//      this.$http.get('/api/mycontents').then((data) => {
//        this.mycontents = data.body.data;
//      })
//    },

    methods:{
      save(){
      this.$store.dispatch('savething',this.inputthing);
      }
    }
  }

</script>

