import React from "react";

function CheckboxFilter({ filterText }) {
  return (
    <div className="flex align-center">
      <input type={"checkbox"} className="checkbox" />
      <p className="m-sm">{filterText}</p>
    </div>
  );
}

export default CheckboxFilter;
