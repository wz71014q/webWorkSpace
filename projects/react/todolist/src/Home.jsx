import React, { Component, Fragment } from 'react';
import './style/style.scss';
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
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  };
  render() {
    return (
      <Fragment>
      {/* 增加水果 */}
        <div>
          <label htmlFor="la">增加服务: </label>
          <input id='la' className="input" value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addList}>增加水果</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
              <li
                key={`item_${index}`}
                onClick={this.deleteItem.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              >
              </li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default Home;
