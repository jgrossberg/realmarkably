import React from 'react';

function CopyBox(props) {
  return (
    <div className="copy">
        <textarea readOnly 
          value={props.copyString} />
    </div>
  );
}

export default CopyBox;
