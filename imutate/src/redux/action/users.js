export const REGISTER_USER = 'REGISTER_USER' 
export const Login_USER = 'Login_USER'

export const registerAction = (newUser) => {
  // action 负责提交reducer Vue commit
  return{
    type: REGISTER_USER,
    data: newUser
  }
}

export const loginAction = (user) => {
  return {
    type: Login_USER,
    data: user
  }
}