"use client";
import Image from "next/image";
import Link from "next/link";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Header = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Link href={"/store/men"} className="HeaderImage">
            <Image
              alt="Slider"
              src={"/images/Header_7.jpg"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/store/men"} className="HeaderImage">
            <Image
              alt="Slider"
              src={"/images/Header_2.jpg"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/store/men"} className="HeaderImage">
            <Image
              alt="Slider"
              src={"/images/Header_3.jpg"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
