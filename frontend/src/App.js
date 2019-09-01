import React from 'react';

import './App.css';
import Header from './containers/Header';
import CopyGenerator from './containers/CopyGenerator';

function App() {
  return (
    <div>
      <Header />

      <CopyGenerator />

	    <div className="footer"></div>
    </div>
  );
}

export default App;
