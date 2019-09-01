import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
        <div>
          <input onChange={this.handleChange} />
        </div>
    );
  }
}

export default SearchInput