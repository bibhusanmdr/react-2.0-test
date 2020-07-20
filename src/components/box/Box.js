import React from "react";

const Box = ({ versionContent = [], step }) => {
  const finalVersion = versionContent.sort(function (a, b) {
    return new Date(b.effectiveDate) - new Date(a.effectiveDate);
  })[0];

  return (
    <div className="box box-xs" data-testid="box">
      <h1 className="box-h1 box-heading">{step}</h1>
      <hr className="hoz-box" />
      <h6 className="box-h6 box-heading">{finalVersion.title}</h6>
      <p>{finalVersion.body}</p>
    </div>
  );
};

export default Box;
