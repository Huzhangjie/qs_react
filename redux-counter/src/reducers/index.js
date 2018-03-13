// reducer 纯函数
// 将 旧状态 + 参数 返回新状态的函数
export default  (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1
    case 'DECREMENT':
      return state - 1
    default: return state
  }
}