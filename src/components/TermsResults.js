import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    termData: PropTypes.array
  };

  render() {
    return (
      <div className="component-emoji-results">
        <ul>
        {this.props.termData.map(termData => (
          <li key={termData.title}>{termData.keywords}</li>
        ))}
        </ul>
      </div>
    );
  }
}
