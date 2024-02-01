import React from "react";

const collapse = () => {
  return (
    <>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Toggle width collapse
        </button>
      </p>
      {/* <div style={{ minHeight: '120px'}}> */}
      <div>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="card card-body" style={{ width: "300px" }}>
            <h2>kbhvhvghv</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default collapse;
