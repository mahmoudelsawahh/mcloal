"use client";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./page.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { LiaListAlt } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import dynamic from "next/dynamic";
// LiaListAlt
import { usePathname, useRouter } from "next/navigation";
// import SimilarItems from "@/components/layout/ProductDetails/SimilarItrms";
const SimilarItems = dynamic(() => import("@/components/layout/ProductDetails/SimilarItrms"), {
  ssr: false,
});
export default function ({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  // console.log(router);
  // console.log(pathname);
  // /profile/wishlist
  // /profile/orders
  // profile/info
  // const [active, setActive] = useState(1);
  return (
    <div className="container margin_top">
      <div className={"cramp"}>
        <Link href={"/"}>Home</Link>
        <span>
          {" "}
          <MdArrowForwardIos />
        </span>
        <Link href={`/profile/info`}>My Account</Link>
        <span>
          {" "}
          <MdArrowForwardIos />
        </span>
        <Link href={`/store/men`} className={"cramp_active"}>
          {pathname === "/profile/orders"
            ? "My orders"
            : pathname === "/profile/wishlist"
            ? "Wishlist"
            : pathname === "/profile/info"
            ? "My Info"
            : pathname === "/profile/info/address"
            ? "Add Address"
            : pathname === "/profile/info/edit-address"
            ? "Edit Address"
            : ""}
        </Link>
      </div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2">
          <div className={styles.sidebar}>
            <div className={styles.welcome}>
              <h2>Hello, Erma</h2>
              <p>Welcome to your Account</p>
            </div>
            <div className={styles.Links}>
              <Link
                href={"/profile/orders"}
                className={`${
                  pathname.includes("orders") ? styles.active : ""
                }`}
              >
                <LiaListAlt />
                <p>My orders</p>
              </Link>
              <Link
                href={"/profile/wishlist"}
                className={`${
                  pathname.includes("wishlist") ? styles.active : ""
                }`}
              >
                <AiOutlineHeart />
                <p>Wishlist</p>
              </Link>
              <Link
                href={"/profile/info"}
                className={`${pathname.includes("info") ? styles.active : ""}`}
              >
                <GoPerson />
                <p>My Info</p>
              </Link>
              <Link href={"/"}>
                <FiLogOut />
                <p>Sign out</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-10">{children}</div>
        {
          pathname.includes("wishlist") && <div className={"col-12"}>
        <h2 className={"main_two font-bold"}>Recently Viewed </h2>
          <SimilarItems />
        </div>
        }
        
      </div>
    </div>
  );
}
