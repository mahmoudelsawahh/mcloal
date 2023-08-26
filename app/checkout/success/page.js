// import SuccessCheckout from "@/components/layout/SuccessCheckout/SuccessCheckout";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

const CheckoutSuccess = () => {
  return (
    <div className="  CenterSuccess">
      <div className="Success_div">
        <div className="Succ_Icon">
          <FiCheck />
        </div>
        <span>Order #65327</span>
        <h1>Tour Payment was successful</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          laudantium nisi non debitis dolore
        </p>
        <Link href={"/profile/orders"} className=" main_btn">
          Return to My Order
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
