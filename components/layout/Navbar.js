"use client";
import React, { useState } from "react";
import styles from "@/components/css/NavBar.module.css";
// import Image from "next/image";
// GoPerson
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div className={styles.NavBar}>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className="grid">
          <div className="col-12">
            <Link href={"/"} onClick={() => setVisibleRight(false)}>
              <h1>Logo</h1>
            </Link>
          </div>
          <div className="col-12 ">
            <div className={`${styles.mainLinks} ${styles.mobile_links}`}>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Men
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Women
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                KIDS
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Home & LIVING
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                BEAUTY
              </Link>
            </div>
          </div>
          <div className="col-12 ">
            <div
              className={`${styles.icon_sec} flex align-items-center justify-content-between`}
            >
              <Link
                onClick={() => setVisibleRight(false)}
                href={"/profile/orders"}
              >
                <p>Track Your order</p>
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/cart"}>
                <p>
                  <span className={styles.bag}>
                    <span>5</span>
                    <HiOutlineShoppingBag />
                  </span>
                  Bag
                </p>
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/auth/login"}>
                <p>
                  <span>
                    <GoPerson />
                  </span>
                  Login
                </p>
              </Link>{" "}
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="container">
        <div className="grid align-items-center justify-content-between">
          <div className="col-6 md:col-3">
            <Link onClick={() => setVisibleRight(false)} href={"/"}>
              <h1>Logo</h1>
            </Link>
          </div>
          <div className="col-6 block md:hidden">
            <button className="Menu_Btn" onClick={() => setVisibleRight(true)}>
              <FiMenu />
            </button>
          </div>
          <div className="col-12 md:col-4">
            <div className={styles.Search_Top}>
              <label htmlFor="search">
                <AiOutlineSearch />
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search for products, barnds and more"
              />
            </div>
          </div>
          <div className="col-3 hidden md:block">
            <div
              className={`${styles.icon_sec} flex align-items-center justify-content-between`}
            >
              <Link
                onClick={() => setVisibleRight(false)}
                href={"/profile/orders"}
              >
                <p>Track Your order</p>
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/cart"}>
                <p>
                  <span className={styles.bag}>
                    <span>5</span>
                    <HiOutlineShoppingBag />
                  </span>
                  Bag
                </p>
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/auth/login"}>
                <p>
                  <span>
                    <GoPerson />
                  </span>
                  Login
                </p>
              </Link>{" "}
            </div>
          </div>
          <div className="col-12 hidden md:block">
            <div className={styles.mainLinks}>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Men
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Women
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                KIDS
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                Home & LIVING
              </Link>
              <Link onClick={() => setVisibleRight(false)} href={"/store/men"}>
                BEAUTY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
