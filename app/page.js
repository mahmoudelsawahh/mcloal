// import Image from "next/image";
import BestSeller from "@/components/layout/Home/BestSeller";
import styles from "./page.module.css";
import Brand from "@/components/layout/Home/Brand";
import NewlyAdd from "@/components/layout/Home/NewlyAdd";
import FollowUs from "@/components/layout/Home/FollowUs";
import Sale from "@/components/layout/Home/Sale";
import Header from "@/components/layout/Home/Header";
import Coupon from "@/components/layout/Home/Coupon";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BestSeller />
      <Sale />
      <NewlyAdd />
      <Coupon />
      <Brand />
      <FollowUs />
    </main>
  );
}
