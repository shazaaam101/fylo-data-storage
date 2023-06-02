import React from "react";

const DataPanel = () => {
  return (
    <div className="DataPanel">
      <p className="notice">
        You've used <b>815 GB</b> of your storage
      </p>
      <div className="progress-bar">
        <progress value="815" min="0" max="1000" />
        <div className="show-min-max">
          <p className="min">
            <b>0 GB</b>
          </p>
          <p className="max">
            <b>1000 GB</b>
          </p>
        </div>
      </div>
      <div className="cap-left">
        <b>185</b>
        <span>GB LEFT</span>
      </div>
    </div>
  );
};

export default DataPanel;
