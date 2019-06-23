import React, { Component, Fragment } from 'react';
import './style/style.scss';
import Item from './Item';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['梨子', '李子']
    };
  };
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };
  addList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  };
  deleteItem(index) {
    const myList = this.state.list;
    myList.splice(index, 1);
    this.setState({
      list: myList
    });
  };
  render() {
    return (
      <Fragment>
      {/* 增加水果 */}
        <div>
          <label htmlFor="la">增加水果: </label>
          <input id='la' className="input" value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addList}>增加水果</button>
        </div>
        <Item itemlist={this.state.list} deleteItem={index=>this.deleteItem.bind(this, index)}/>
      </Fragment>
    );
  }
}

export default Home;
