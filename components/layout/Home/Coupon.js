import Image from "next/image";
import { BiCopy } from "react-icons/bi";
const Coupon = () => {
  return (
    <div className="container-fluid Coupon margin_top">
      <div className="container">
        <div className="grid justify-content-between align-items-center">
          <div className="col-12 md:col-6 text-center">
            <div className="Coupon_description">
              <h2> Frist Time Shopping ?</h2>
              <p>
                Use Our Promo code to Get <strong>20% off</strong>
              </p>
            </div>
            <div className="promo">
              <p>WOSA2023</p>
              <BiCopy />
            </div>
          </div>
          <div className="col-12 md:col-6">
            <div className="Image_offer">
              <Image
                src={"/images/home_offer.jpg"}
                alt="Coupon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
