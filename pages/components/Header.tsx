import React from "react";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/Header.module.css";
export default function Header() {
  return (
    <div className={`${styles.header} flex justify-bw align-center`}>
      <h3 className={`${styles["header-text"]}`}>TeeRexStore</h3>
      <div className="flex align-center">
        <div>
          <h3 className={`${styles["header-text"]} ${styles.label}`}>
            Products
          </h3>
          <hr className={`${styles["label-line"]}`} />
        </div>
        <div className={`${styles["cart-count-container"]}`}>
          <BsCartPlus
            style={{
              paddingRight: "1em",
              marginLeft: "0em",
              width: "4em",
              height: "3em",
            }}
          />
          <p className={`${styles["cart-count"]}`}>19</p>
        </div>
      </div>
    </div>
  );
}
