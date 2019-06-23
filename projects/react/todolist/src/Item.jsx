import React, { Component, Fragment }from 'react';
import propTypes from 'prop-types'

class item extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <ul>
        {
          this.props.itemlist.map((item, index) => {
            return (
            <li
              key={`item_${index}`}
              onClick={this.props.deleteItem(index)}
              dangerouslySetInnerHTML={{ __html: item }}
            >
            </li>
            )
          })
        }
      </ul>
    );
  }
}

item.propTypes = {
  index: propTypes.number,
  itemlist: propTypes.array.isRequired
}

export default item;