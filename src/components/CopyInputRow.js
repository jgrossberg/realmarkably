import React from 'react';

function CopyInputRow(props) {
  return (
    <div>
      <select className="elemental-select" >
        {props.options.map((item, index) => {
          return <option key={index}>{item}</option>
        })}
      </select>
      <input 
        className="elemental-input" 
        defaultValue="or Filter by" />
      <button 
        className="elemental-search" 
        onClick={props.handleOpen}>
        find
      </button>
      <br />
    </div>
  );
}

export default CopyInputRow;
