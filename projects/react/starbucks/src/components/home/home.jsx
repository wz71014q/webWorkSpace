import React, { Component } from 'react'
// import asyncComponent from '../../utils/asyncComponent';
import './home.css'
import Menu from '../../components/menu/menu'
import Detail from '../../components/detail/detail'
import Login from '../login/login';
// const Menu = asyncComponent(() => import("../../components/menu/menu"))
// const Detail = asyncComponent(() => import("../../components/detail/detail"))
// 模块加载：asyncComponent函数返回值是一个react组件，组件内部帮你做好了then()方法的操作
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fromM_login: false
    }
  }
  transFromMenu(fromM_login) {
    // 用props传值
    this.setState({
      fromM_login
    })
  }
  componentDidUpdate() {
    console.log('home update');
  }
  render() {
    return(
      <div className="home">
        <Menu transFromMenu = {fromM_login => {this.transFromMenu(fromM_login)}} />
        <Detail />
        <Login fromM_login = {this.state.fromM_login} transFromMenu = {fromM_login => {this.transFromMenu(fromM_login)}}/>
      </div>
    )
  }
}

export default Home