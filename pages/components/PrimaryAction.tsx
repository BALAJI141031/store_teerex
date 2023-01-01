import React from "react";

export default function PrimaryAction({ children, addToCart }) {
  return (
    <button className="cta" onClick={() => addToCart((prev: boolean) => !prev)}>
      {children}
    </button>
  );
}
