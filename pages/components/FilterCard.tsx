import React from "react";
import { Colors, Price, Gender, Type } from "../../constants";
import CheckboxFilter from "./CheckboxFilter";
function FilterCard() {
  return (
    <div
      style={{
        border: "solid 0px",
        minWidth: "20rem",
        height: "max-content",
        padding: "1rem",
        marginTop: "1rem",
        marginLeft: "1rem",
        boxShadow:
          "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);",
      }}
    >
      <div>
        <h3 className="m-sm">Color</h3>
        {Object.values(Colors).map((color) => (
          <CheckboxFilter filterText={color} />
        ))}
      </div>
      <div>
        <h3 className="m-sm">Price</h3>
        {Object.values(Price).map((price) => (
          <CheckboxFilter filterText={price} />
        ))}
      </div>
      <div>
        <h3 className="m-sm">Gender</h3>
        {Object.values(Gender).map((gender) => (
          <CheckboxFilter filterText={gender} />
        ))}
      </div>
      <div>
        <h3 className="m-sm">Type</h3>
        {Object.values(Type).map((type) => (
          <CheckboxFilter filterText={type} />
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
