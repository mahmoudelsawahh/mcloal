"use client";
import SimilarItems from "@/components/layout/ProductDetails/SimilarItrms";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./page.module.css";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { useRouter } from "next/navigation";
const Cart = () => {
  const router = useRouter();
  const colors = [
    { name: "Black", key: "A" },
    { name: "Blue", key: "M" },
    { name: "White", key: "P" },
    // { name: "Pink", key: "R" },
    // { name: "Green", key: "g" },
    // { name: "Red", key: "h" },
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
    <div className={"container margin_top"}>
      <div className={"cramp"}>
        <Link href={"/"}>Home</Link>
        <span>
          {" "}
          <MdArrowForwardIos />
        </span>
        <Link href={`/cart`} className={"cramp_active"}>
          cart
        </Link>
      </div>
      <div className={styles.Cart}>
        <h1>
          Cart <span>(3 items)</span>
        </h1>
        <div className="grid">
          <div className="col-12 md:col-9">
            <div className={`grid text-center ${styles.header}`}>
              <div className="col-4"></div>
              <div className="col-2">
                <h3>Color</h3>
              </div>
              <div className="col-1">
                <h3>Size</h3>
              </div>
              <div className="col-2">
                <h3>Quantity</h3>
              </div>
              <div className="col-2">
                <h3>Price</h3>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="col-12">
              <div className={`grid ${styles.col_container}`}>
                <div className="col-12 md:col-4">
                  <div className=" flex  ">
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
                    </div>
                  </div>
                  <button className={styles.Favourite}>
                    <AiFillHeart />
                    <p>Move to Saved Items</p>
                  </button>
                </div>
                <div className="col-6 md:col-2">
                  <div className="flex  flex-wrap gap-3  ">
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
                <div className="col-6 md:col-1">
                  <div
                    className={`m-0 size`}
                    style={{ justifyContent: "center" }}
                  >
                    <button>S</button>
                  </div>
                </div>
                <div className="col-5 md:col-2">
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
                </div>
                <div className="col-4 md:col-2">
                  <div className={styles.price}>
                    <del>200$</del>
                    <p>180$</p>
                  </div>
                </div>
                <div className="col-3 md:col-1 text-center">
                  <button className={styles.delete}>x</button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={`grid ${styles.col_container}`}>
                <div className="col-12 md:col-4">
                  <div className=" flex  ">
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
                    </div>
                  </div>
                  <button className={styles.Favourite}>
                    <AiFillHeart />
                    <p>Move to Saved Items</p>
                  </button>
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
                <div className="col-6 md:col-1">
                  <div
                    className={`m-0 size`}
                    style={{ justifyContent: "center" }}
                  >
                    <button>S</button>
                  </div>
                </div>
                <div className="col-5 md:col-2">
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
                </div>
                <div className="col-4 md:col-2">
                  <div className={styles.price}>
                    <del>200$</del>
                    <p>180$</p>
                  </div>
                </div>
                <div className="col-3 md:col-1 text-center">
                  <button className={styles.delete}>x</button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={`grid ${styles.col_container}`}>
                <div className="col-12 md:col-4">
                  <div className=" flex  ">
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
                    </div>
                  </div>
                  <button className={styles.Favourite}>
                    <AiFillHeart />
                    <p>Move to Saved Items</p>
                  </button>
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
                <div className="col-6 md:col-1">
                  <div
                    className={`m-0 size`}
                    style={{ justifyContent: "center" }}
                  >
                    <button>S</button>
                  </div>
                </div>
                <div className="col-5 md:col-2">
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
                </div>
                <div className="col-4 md:col-2">
                  <div className={styles.price}>
                    <del>200$</del>
                    <p>180$</p>
                  </div>
                </div>
                <div className="col-3 md:col-1 text-center">
                  <button className={styles.delete}>x</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className={styles.Subtotal}>
              <div className="flex justify-content-between  align-items-center ">
                <h4>
                  Subtotal <span>(3 Items)</span>
                </h4>
                <p>$540.00</p>
              </div>
              <div className="flex justify-content-between  align-items-center ">
                <h4>Savings</h4>
                <p>-$30.00</p>
              </div>
              <hr />
              <div className="flex justify-content-between  align-items-center ">
                <h4>Shipping </h4>
                <p>$540.00</p>
              </div>
              <hr />
              <div className="flex justify-content-between  align-items-center ">
                <h4>Total </h4>
                <p>$540.00</p>
              </div>
              <button
                className=" main_btn"
                onClick={() => {
                  router.push("/checkout");
                }}
              >
                Countinue to Checkout
              </button>
            </div>
          </div>
        </div>
        <h2 className=" main_two mt-5">Recommended with Your Order</h2>
        <SimilarItems />
      </div>
    </div>
  );
};

export default Cart;
