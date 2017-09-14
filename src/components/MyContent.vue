<template>
  <div class="list-group">
    <a class="list-group-item" v-for="(mycontent,index) in mycontents">
      <div class="row">
        <div class="col-sm-2 user-details">
          <img :src="mycontent.img" class="avatar img-circle img-responsive" />
          <img :src="img1" class="avatar img-circle img-responsive" />
          <p class="text-center">
            <strong>
              {{ mycontent.name }}
            </strong>
          </p>
        </div>

        <div class="col-sm-2 text-center time-block">
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
        mycontents:[]
    }
    },
    created () {
      this.$http.get('/api/mycontents').then((data) => {
        this.mycontents = data.body.data;
      })
    }
  }

</script>

