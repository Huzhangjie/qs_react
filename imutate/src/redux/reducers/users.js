import Immutable from 'immutable'
// 不可变 react中 state的改变会刷新 重绘 render方法再执行一次
// state未变 就没有必要 rerender
// redux 使用 Immutable来实现不可变的state
// 业界认为 可变的状态是万恶之源

const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false,
  token: null,

})

export const users = (state = initialState, action = {}) => {
  switch(action.type) {
    // case REGISTER_USER: return state.merge({
    //   'newUser': action.data,
    //   'saveSuccess': false,
    //   'error': null
    // })
    // case REGISTER_USER_SUCCESS: return state.set(
    //   'saveSuccess', action.data
    // )
    // case REGISTER_USER_FAILURE: return state.set(
    //   'error', action.data
    // )
    // case CURRENT_USER: return state.merge({
    //   'token': action.data,
    //   'error': null
    // })
    default: return state
  }
}