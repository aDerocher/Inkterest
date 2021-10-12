import React from "react";

function Pin_builder() {
  return (
    <div className="pin-builder-container">
      <div className="pin-builder-header">
        <div>
          <button>delete</button>
          <button>Save</button>
        </div>
      </div>
      <div className="pin-builder-left">
          <button> add </button>
      </div>
      <div className="pin-builder-right"></div>
    </div>
  );
}

export default Pin_builder;
