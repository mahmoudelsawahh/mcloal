"use client";
import Image from "next/image";
import styles from "../page.module.css";
const OrderDetails = () => {
  return (
    <div className="">
      <h1 className=" main_two">Order Details</h1>
      <div
        className={`${styles.order_number} margin_top flex justify-content-between align-items-center flex-wrap gap-3`}
      >
        <div>
          <h4>Order No: #56765</h4>
          <p>Placed on 18 Oct 2023 2:40pm PM</p>
        </div>
        <div>
          <p className={styles.total}>
            Total: <span>$200.00</span>
          </p>
        </div>
      </div>
      <div className={styles.track}>
        <div className={styles.line}>
          <div className={styles.finish}></div>
          <div className={styles.active}> </div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.state}>
          <p>Order Placed</p>
          <p>Inprogress</p>
          <p>Shipped</p>
          <p>Delivered</p>
        </div>
      </div>
      <div className={styles.State_time}>
        <span> 18 Oct 2023 2:40pm PM</span>
        <p className="font-bold">Your Order Has beeen successfully verified.</p>
      </div>
      <div className={styles.products}>
        <div
          className={`grid ${styles.col_container} justify-content-between gap-3`}
        >
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
          </div>

          <div className="col-12 md:col-2">
            <div className={styles.price}>
              <p>
                <span>QTY:</span> 1
              </p>
            </div>
          </div>
          <div className="col-4 md:col-2">
            <div className={styles.price}>
              <p>200$</p>
            </div>
          </div>
          <div className="col-3 md:col-1 text-center">
            <button className={styles.delete}>x</button>
          </div>
        </div>
        <div
          className={`grid ${styles.col_container} justify-content-between gap-3`}
        >
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
          </div>

          <div className="col-12 md:col-2">
            <div className={styles.price}>
              <p>
                <span>QTY:</span> 2
              </p>
            </div>
          </div>
          <div className="col-4 md:col-2">
            <div className={styles.price}>
              <p>200$</p>
            </div>
          </div>
          <div className="col-3 md:col-1 text-center">
            <button className={styles.delete}>x</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
