import React from "react";

const Loader = () => {
  return (
    <>
      {/* Loader */}
      <div className="container">
        <div className="row"
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      {/* Loader / End */}
    </>
  );
};

export default Loader;
