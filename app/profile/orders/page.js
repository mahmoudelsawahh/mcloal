"use client";
import { useState } from "react";
// AiFillCheckCircle
import styles from "./page.module.css";
import OrderState from "@/components/layout/Orders/OrderState";
export default function Orders() {
  const [HeadersId, setHeadersId] = useState(1);
  return (
    <div className={styles.Orders}>
      <h1 className=" main_two">My Orders</h1>
      <div className={styles.Toogelbuttons}>
        <h2
          onClick={() => {
            setHeadersId(1);
          }}
          className={`${HeadersId === 1 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Active
        </h2>
        <h2
          onClick={() => {
            setHeadersId(2);
          }}
          className={`${HeadersId === 2 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Cancelled
        </h2>
        <h2
          onClick={() => {
            setHeadersId(3);
          }}
          className={`${HeadersId === 3 ? styles.ToggleActive : ""} `}
          style={{ cursor: "pointer" }}
        >
          Compeleted
        </h2>
      </div>
      <OrderState />
    </div>
  );
}
