"use client";
import { Rating } from "primereact/rating";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { AiFillHeart } from "react-icons/ai";
import styles from "./productDetails.module.css";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const router = useRouter();
  const colors = [
    { name: "Black", key: "A" },
    { name: "Blue", key: "M" },
    { name: "White", key: "P" },
    { name: "Pink", key: "R" },
    { name: "Green", key: "g" },
    { name: "Red", key: "h" },
  ];
  const [selectedColors, setSelectedColors] = useState(colors);

  const [count, setCount] = useState(1);
  function DecressHandeller() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((state) => state - 1);
    }
  }
  function IncressHandeller() {
    setCount((state) => state + 1);
  }
  return (
    <div className={"Product_Details"}>
      <h1>Luiz Vitton Laca Suit</h1>
      <div className="price_Rate mt-2  justify-content-start ">
        <div className="Rate m-0  ">
          <Rating value={5} readOnly cancel={false} />
        </div>
        <span className="reviewCount">(12)</span>
      </div>

      <div className="price mt-2">
        <span>180.00$</span>
        <del className="Discount">210.00$</del>
      </div>
      <h2 className={" mt-4"}>Color :</h2>
      <div className="flex  gap-3 mt-3 ">
        {colors.map((ele) => {
          return (
            <div key={ele.key} className="flex align-items-center ">
              <RadioButton
                className={`Radio`}
                style={{ "--mainRadio": ele.name }}
                inputId={ele.key}
                name="category"
                value={ele}
                onChange={(e) => setSelectedColors(e.value)}
                checked={selectedColors.key === ele.key}
              />
            </div>
          );
        })}
      </div>
      <h2 className={" mt-4"}>Size :</h2>
      <div className={"m-0 size justify-content-start  mt-3 "}>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>
      <h2 className={" mt-4"}>Quantity :</h2>
      <div className={`${styles.Product_add_to_cart} mt-3`}>
        <div className={styles.Counter_section}>
          <div className={styles.Product_Count} aria-hidden="true">
            <button onClick={DecressHandeller} aria-hidden="true">
              -
            </button>
            <span>{count}</span>
            <button onClick={IncressHandeller}>+</button>
          </div>
        </div>
      </div>
      <div className={`${styles.Product_add_to_cart} mt-3`}>
        <div className={styles.Counter_section}>
          <button
            aria-hidden="true"
            className={styles.add_to_cart_button}
            // onClick={() => {
            //   router.push("/cart");
            // }}
          >
            Add To Cart
          </button>
          <button
            aria-hidden="true"
            className={`${styles.add_to_cart_button} ${styles.buy_Now_Btn}`}
            // onClick={AddToCartHandeler}
            onClick={() => {
              router.push("/cart");
            }}
          >
            Buy Now
          </button>
          <button className={styles.add_to_favourite_button}>
            {" "}
            <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
