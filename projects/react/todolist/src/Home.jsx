import React, { Component, Fragment } from 'react';

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
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addList}>增加水果</button>
        </div>
        <ul>
          { this.state.list.map((item, index) => <li key={`item_${index}`}>{item}</li>) }
        </ul>
      </Fragment>);
  }
}

export default Home;
