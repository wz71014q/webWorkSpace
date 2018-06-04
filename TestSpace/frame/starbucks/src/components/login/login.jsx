import React, {Component} from 'react';
import './login.css'

class Detail extends Component {
  constructor(props){
    super(props)
    this.state={
      // fromM_login: false
    }
  }
  loginHide() {
    this.props.transFromMenu(false);
  }
  render() {
    let loginStatus = this.props.fromM_login ? 'loginContainer' : 'loginContainer loginHide'
    return (
      <div className={loginStatus}>
        <div className="mask" onClick = {this.loginHide.bind(this)}></div>
        <div className="loginwrap">
        <form className="loginer">
          <label htmlFor="account">账号: </label>
          <input type="text" name="account" ref='refAccount' placeholder="请输入账号"/>
          <hr></hr>
          <label htmlFor="password">密码: </label>
          <input type="text" name="password" ref='refPassword' placeholder="请输入密码"/>
        </form>
        <div className="submit">
          <input type="button" value="确定" onClick = {this.loginHide.bind(this)}/>
          <input type="button" value="取消" onClick = {this.loginHide.bind(this)}/>
        </div>
        </div>
      </div>
    )
  }
}

export default Detail