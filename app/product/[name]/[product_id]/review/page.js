import Image from "next/image";
import styles from "../../../page.module.css";
import AddReview from "@/components/layout/ProductDetails/AddReview";
const Review = () => {
  return (
    <div className=" margin_top container-lg">
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
          <h1>Luiz Vitton Lace Suit</h1>
          <p>Kids Plus Size Trapeze</p>
        </div>
      </div>
      <AddReview />
    </div>
  );
};

export default Review;
