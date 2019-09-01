import React from 'react';
import PropTypes from 'prop-types';

import SearchInput from '../components/SearchInput'
import TermsResults from '../components/TermsResults.js'

import terms from '../terms.json'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredTerms: this.filterTerms("", 20)
    }
  }

  filterTerms(searchText, maxResults) {
    return terms
    .filter(text => {
      if (text.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (text.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
  }

  handleSearchChange = event => {
    this.setState({
      filteredTerms: this.filterTerms(event.target.value, 20)
    });
  };

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };
    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <SearchInput textChange={this.handleSearchChange} />
          <TermsResults termData={this.state.filteredTerms}/>

          <button onClick={this.props.handleClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;