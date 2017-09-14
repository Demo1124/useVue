import * as types from './mutation-types'

export default {
  savething({ commit }, newthing) {
    commit(types.SAVE_THING, newthing)
  }
}
