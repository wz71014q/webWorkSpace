import ReactDOM, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home';

const RouterConfig = () => (
  <Router>
    <Route path="/" exact component={Home} />{/* exact表示开启严格匹配 */}
  </Router>
);
ReactDOM.render(RouterConfig);

export default class RouteConfig extends Component {
  render() {
    RouterConfig;
  }
}
