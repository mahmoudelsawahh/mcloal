"use client";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "primereact/rating";
const ProdcutCard = ({ count }) => {
  return (
    <Link href={"/product/name/10"} className="ProductCard">
      <div className="ProductImage">
        <p className="new">New</p>
        <p className="offer">-20%</p>
        <Image
          alt="Product"
          src={"/images/18.jpg"}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="Product_Description">
        <h3>Luiz Vitton Lace Suit</h3>
        <div className="price_Rate">
          <div className="price">
            <span>180.00$</span>
            <del className="Discount">210.00$</del>
          </div>
          <div className="Rate ">
            <Rating value={count} readOnly cancel={false} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProdcutCard;
