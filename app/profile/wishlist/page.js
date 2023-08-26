"use client";
import styles from "../page.module.css";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import Image from "next/image";
const WishLish = () => {
  const colors = [
    { name: "Black", key: "A" },
    { name: "Blue", key: "M" },
    { name: "White", key: "P" },
    { name: "Pink", key: "R" },
    { name: "Green", key: "g" },
    { name: "Red", key: "h" },
  ];
  const [selectedColors, setSelectedColors] = useState(colors);
  return (
    <div className=" WishLish">
      <h1 className="">WishList</h1>
      <div className={`grid align-items-center mt-5 ${styles.WishLish_col}`}>
        <div className="col-1">
          <button className={styles.delete}>x</button>
        </div>
        <div className="col-12 md:col-4">
          <div className=" flex align-items-center ">
            <div className={styles.imageContainer}>
              <Image
                alt="Product"
                src={"/images/18.jpg"}
                layout="fill"
                objectFit="fill"
                objectPosition="center"
              />
            </div>
            <div className={styles.productName}>
              <h4>Luiz Vitton Lace Suit</h4>
              <p>Kids Plus Size Trapeze</p>
              <span>October 16, 2022</span>
            </div>
          </div>
        </div>
        <div className="col-6 md:col-2">
          <div className="flex  flex-wrap gap-3 mt-3 ">
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
        </div>
        <div className="col-6 md:col-2">
          <div className={styles.price}>
            <del>200$</del>
            <p>180$</p>
          </div>
        </div>
        <div className="col-12 md:col-3">
          <button className=" main_btn">Add to Cart</button>
        </div>
      </div>
      <div className={`grid align-items-center mt-5 ${styles.WishLish_col}`}>
        <div className="col-1">
          <button className={styles.delete}>x</button>
        </div>
        <div className="col-12 md:col-4">
          <div className=" flex align-items-center ">
            <div className={styles.imageContainer}>
              <Image
                alt="Product"
                src={"/images/18.jpg"}
                layout="fill"
                objectFit="fill"
                objectPosition="center"
              />
            </div>
            <div className={styles.productName}>
              <h4>Luiz Vitton Lace Suit</h4>
              <p>Kids Plus Size Trapeze</p>
              <span>October 16, 2022</span>
            </div>
          </div>
        </div>
        <div className="col-6 md:col-2">
          <div className="flex  flex-wrap gap-3 mt-3 ">
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
        </div>
        <div className="col-6 md:col-2">
          <div className={styles.price}>
            <del>200$</del>
            <p>180$</p>
          </div>
        </div>
        <div className="col-12 md:col-3">
          <button className=" main_btn">Add to Cart</button>
        </div>
      </div>
      <div className={`grid align-items-center mt-5 ${styles.WishLish_col}`}>
        <div className="col-1">
          <button className={styles.delete}>x</button>
        </div>
        <div className="col-12 md:col-4">
          <div className=" flex align-items-center ">
            <div className={styles.imageContainer}>
              <Image
                alt="Product"
                src={"/images/18.jpg"}
                layout="fill"
                objectFit="fill"
                objectPosition="center"
              />
            </div>
            <div className={styles.productName}>
              <h4>Luiz Vitton Lace Suit</h4>
              <p>Kids Plus Size Trapeze</p>
              <span>October 16, 2022</span>
            </div>
          </div>
        </div>
        <div className="col-6 md:col-2">
          <div className="flex  flex-wrap gap-3 mt-3 ">
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
        </div>
        <div className="col-6 md:col-2">
          <div className={styles.price}>
            <del>200$</del>
            <p>180$</p>
          </div>
        </div>
        <div className="col-12 md:col-3">
          <button className=" main_btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default WishLish;
