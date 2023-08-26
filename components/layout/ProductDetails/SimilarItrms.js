"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProdcutCard from "../ProductCard";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./productDetails.module.css";
const SimilarItems = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={`${styles.Landing} `}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          clickable: true,
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdcutCard />
        </SwiperSlide>
      </Swiper>
      <div
        ref={navigationNextRef}
        className={`${styles.arrow} ${styles.leftArrow}`}
      >
        <MdKeyboardArrowLeft />
      </div>
      <div
        ref={navigationPrevRef}
        className={`${styles.arrow} ${styles.rightArrow}`}
      >
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default SimilarItems;
