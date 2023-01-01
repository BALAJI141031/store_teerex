import React from "react";
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <div className="flex align-center searchbar-div">
      <input placeholder="Search For Products..." className="search-bar" />
      <div
        style={{
          border: "solid 0px",
          height: "3rem",
          width: "3.3rem",
          background: "#676d70",
          borderRadius: "5px",
        }}
        className="flex align-center justify-center"
      >
        <BsSearch size={"1.6rem"} color={"white"} />
      </div>
    </div>
  );
}
