import React, { Component } from "react";
import './index.css'
import Header from './header';
import { connect } from 'react-redux'
import {registerAction, loginAction} from '../../redux/action/users'
import { bindActionCreators } from 'redux'

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

// connect 在返回值 加一层 redux
// react 风格 jsx 组件化指令
export default connect(
    (state) => {
        return { users: state.users}
    },
    (dispatch) => {
        return{
            registerActions: bindActionCreators(registerAction, dispatch),
            loginActions: bindActionCreaters(loginAction, dispatch)
        }
    }
)(Index)


