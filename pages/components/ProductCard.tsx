import React, { use, useState } from "react";
import styles from "../../styles/Products.module.css";
import { Product } from "../../slices/catalogue.slice";
import PrimaryAction from "./PrimaryAction";
export default function ProductCard({ product }) {
  const [addedToCart, addToCart] = useState<boolean>(false);
  const { imageURL, price, name } = product;
  return (
    <div className={styles.card}>
      <img src={product.imageURL} className={styles.image} />
      <div className={`${styles["cta-div"]}`}>
        <p className={`${styles["price-tag"]}`}>Rs {price}</p>

        {!addedToCart ? (
          <PrimaryAction addToCart={addToCart}>Add To Cart</PrimaryAction>
        ) : (
          <PrimaryAction addToCart={addToCart}>
            <div
              className="flex align-center justify-center"
              style={{ margin: "0px" }}
            >
              <button
                style={{
                  margin: "2px",
                  fontSize: "1rem",
                  background: "transparent",
                  boxShadow: "none",
                  border: "solid 0px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                -
              </button>
              <p style={{ margin: "0px 4px 0px 4px" }}>1</p>
              <button
                style={{
                  margin: "2px",
                  fontSize: "1rem",
                  background: "transparent",
                  boxShadow: "none",
                  border: "solid 0px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                +
              </button>
            </div>
          </PrimaryAction>
        )}
      </div>
      <p className={`${styles["product-name"]}`}>{name}</p>
    </div>
  );
}
