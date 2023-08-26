import styles from "@/components/css/OrderState.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const OrderState = () => {
  const router = useRouter();
  return (
    <div className={` ${styles.orders_state}`}>
      <div className={styles.order_div}>
        <div className={styles.order_num}>
          <div>
            <h4>Order No: #56765</h4>
            <p>
              <span>order date:</span> 18 Oct 2023 2:40pm PM
            </p>
            <p>
              <span>Estimated Delivery:</span> 20 Oct 2023{" "}
            </p>
          </div>
          <div>
            <p>
              <span>order state:</span> inprogress
            </p>
            <p>
              <span>payment method:</span> Cash on Delivery{" "}
            </p>
          </div>
        </div>
        <div className={styles.product}>
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
              <p>
                <span>Color:</span> black
              </p>
              <p>
                <span>QTY:</span> 1
              </p>
              <p>
                <span>Total:</span> $200.00
              </p>
            </div>
          </div>
          <button className=" main_btn font-medium"
            onClick={() => router.push("/profile/orders/order-details")}
          
          >View Details</button>
        </div>
      </div>
      <div className={styles.order_div}>
        <div className={styles.order_num}>
          <div>
            <h4>Order No: #56765</h4>
            <p>
              <span>order date:</span> 18 Oct 2023 2:40pm PM
            </p>
            <p>
              <span>Estimated Delivery:</span> 20 Oct 2023{" "}
            </p>
          </div>
          <div>
            <p>
              <span>order state:</span> inprogress
            </p>
            <p>
              <span>payment method:</span> Cash on Delivery{" "}
            </p>
          </div>
        </div>
        <div className={styles.product}>
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
              <p>
                <span>Color:</span> black
              </p>
              <p>
                <span>QTY:</span> 1
              </p>
              <p>
                <span>Total:</span> $200.00
              </p>
            </div>
          </div>
          <button className=" main_btn font-medium"
            onClick={() => router.push("/profile/orders/order-details")}
          
          >View Details</button>
        </div>
      </div>
      <div className={styles.order_div}>
        <div className={styles.order_num}>
          <div>
            <h4>Order No: #56765</h4>
            <p>
              <span>order date:</span> 18 Oct 2023 2:40pm PM
            </p>
            <p>
              <span>Estimated Delivery:</span> 20 Oct 2023{" "}
            </p>
          </div>
          <div>
            <p>
              <span>order state:</span> inprogress
            </p>
            <p>
              <span>payment method:</span> Cash on Delivery{" "}
            </p>
          </div>
        </div>
        <div className={styles.product}>
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
              <p>
                <span>Color:</span> black
              </p>
              <p>
                <span>QTY:</span> 1
              </p>
              <p>
                <span>Total:</span> $200.00
              </p>
            </div>
          </div>
          <button
            className=" main_btn font-medium"
            onClick={() => router.push("/profile/orders/order-details")}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderState;
