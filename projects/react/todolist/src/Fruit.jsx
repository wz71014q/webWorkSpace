import React, { Component, Fragment } from 'react';

let ul = () => {
  return <Fragment>
    <div>
        <input /><button>增加品质</button>
      </div>
      <ul>
        <li>橘子</li>
        <li>香蕉</li>
      </ul>
    </div>
    </Fragment>
};

class Leady extends Component {
  render() {
    return ul;
  }
}

export default Leady;
