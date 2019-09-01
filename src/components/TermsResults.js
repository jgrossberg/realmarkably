import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TermsResults extends PureComponent {
  static propTypes = {
    termData: PropTypes.array
  };

  render() {
    return (
      <div className="container-modal-terms">
        <ul>
        {this.props.termData.map(termData => (
          <li key={termData.title}
              onClick={() => {this.props.termClick(termData.title)}}
              // onClick={() => {console.log(termData.title)}}
          >
            {termData.title}
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default TermsResults