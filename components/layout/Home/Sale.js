import Image from "next/image";
import Link from "next/link";

const Sale = () => {
  return (
    <div className="container margin_top">
      <div className="grid justify-content-between align-content-center">
        <div className="col-12 md:col-6">
          <Link href={"/"} className="SaleImageContainer">
            <Image
              alt="Sale"
              src={"/images/sale.jpg"}
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
          </Link>
        </div>
        <div className="col-12 md:col-6">
          <Link href={"/"} className="SaleImageContainer">
            <Image
              alt="Sale"
              src={"/images/sale.jpg"}
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
