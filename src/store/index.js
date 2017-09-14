import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import router from '../router'
import VueResource from 'vue-resource'

Vue.use(router)
Vue.use(VueResource)
Vue.use(Vuex)

var appData = require('../../mycontents.json')
var contents = appData.mycontents
var loginuser = appData.loginuser

const state = {
  list: contents
}

export default new Vuex.Store({
  contents,
  mutations,
  actions,
  loginuser,
  state
})
