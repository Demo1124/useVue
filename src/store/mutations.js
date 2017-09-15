import * as types from './mutation-types'

export default {

  [types.SAVE_THING](state,newthing){
    console.log(state);
    // const loginname = loginuser[0].loginname;
    // const img=loginuser[0].img;
    var nowdata = new Date();
    var indata = nowdata.getHours()+":"+nowdata.getMinutes();
    state.list.unshift(Object.assign({"content":newthing,"img":state.user[0].img,"name":state.user[0].loginname,"date":indata}));
  }

}
