import React from 'react';

function CopyBox(props) {
  return (
    <div className="copy">
        <textarea defaultValue={props.copyString}></textarea>
    </div>
  );
}

export default CopyBox;
