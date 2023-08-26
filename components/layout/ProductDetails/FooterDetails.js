"use client";

import { useState } from "react";
import styles from "./productDetails.module.css";
import ProductDescription from "./ProductDescription/ProductDescription";
import Questions from "./ProductDescription/Questions";
import Reviews from "./ProductDescription/Reviews";
const FooterDetails = () => {
  const [HeadersId, setHeadersId] = useState(1);
  return (
    <div className={`${styles.ProductFooter} margin_top`}>
      <div className={styles.Toogelbuttons}>
        <h2
          onClick={() => {
            setHeadersId(1);
          }}
          className={`${HeadersId === 1 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Product Description
        </h2>
        <h2
          onClick={() => {
            setHeadersId(2);
          }}
          className={`${HeadersId === 2 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Ratings & Reviews
        </h2>
        <h2
          onClick={() => {
            setHeadersId(3);
          }}
          className={`${HeadersId === 3 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Questions
        </h2>
      </div>

      <div className={`mt-5 ${styles.ProductFooter_Descriptions}`}>
        {HeadersId === 1 && <ProductDescription />}
        {HeadersId === 2 && <Reviews />}
        {HeadersId === 3 && <Questions />}
      </div>
    </div>
  );
};

export default FooterDetails;
