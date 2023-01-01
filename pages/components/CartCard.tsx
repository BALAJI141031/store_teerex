import React from "react";
import SecondaryAction from "./SecondaryAction";

export default function CartCard() {
  return (
    <div
      className="flex align-center justify-bw"
      style={{
        width: "30rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <div
        style={{ width: "50%" }}
        className="flex align-center justify-center"
      >
        <img />
        <div>
          <h3 style={{ margin: "0px" }}>Pink round</h3>
          <h3 style={{ margin: "0px" }}>Rs 250</h3>
        </div>
      </div>
      <div
        style={{ width: "50%" }}
        className="flex align-center justify-center"
      >
        <select style={{ marginRight: "10px", height: "2rem" }}>
          <option>Qty:1</option>
        </select>
        <SecondaryAction>Delete</SecondaryAction>
      </div>
    </div>
  );
}
