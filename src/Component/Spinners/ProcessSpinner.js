import React from 'react';
import './loader.css';



const ProcessSpinner = () => {
  return <div className="lds-ring">
    <div
      style={{
        width: '30px',
        height: "30px",
        border: `4px solid #170A59`,
        borderColor: `transparent transparent transparent #170A59`
      }}
    ></div><div></div><div></div><div></div>
  </div>
}

export default ProcessSpinner;
