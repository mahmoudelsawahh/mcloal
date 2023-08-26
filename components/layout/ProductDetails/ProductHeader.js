"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
// Import Swiper React components
import "./style.css";
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const ProductHeader = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [max, setMax] = useState(0);
  useEffect(() => {
    setMax(window.innerWidth);
  }, [max]);
  return (
    <div className="grid">
      <div className="col-12 md:col-2">
        <Swiper
          speed={1000}
          direction={max > 700 ? "vertical" : "horizontal"}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={max > 700 ? 5 : 4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, A11y]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={`mySwiper ${
            max > 700 ? "Verticle_Swiper" : "horizontal_swiper"
          } `}
        >
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImagethumb">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-12 md:col-10">
        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#fff",
          //   "--swiper-pagination-color": "#fff",
          // }}
          spaceBetween={10}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs, Autoplay, A11y]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProductImageContainer">
              <Image
                src={"/images/18.jpg"}
                alt="product"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductHeader;
