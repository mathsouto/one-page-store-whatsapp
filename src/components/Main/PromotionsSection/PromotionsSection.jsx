import { useEffect, useState } from "react";
import styles from "./promotionsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function PromotionsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const slides = [
    { src: "/images/promotions/1.jpg", type: "large" },
    { src: "/images/promotions/2.jpg", type: "small" },
    { src: "/images/promotions/3.jpg", type: "small" },
    { src: "/images/promotions/3.jpg", type: "small" },
    { src: "/images/promotions/3.jpg", type: "small" },
  ];

  const renderSlides = () =>
    slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className={styles[slide.type]}>
          <img src={slide.src} alt={`promo-${index}`} />
        </div>
      </SwiperSlide>
    ));

  if (isMobile) {
    return (
      <div className={styles.mainPromotions}>
        <div className={styles.containerPromotions}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {renderSlides()}
          </Swiper>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainPromotions}>
      <div className={styles.containerPromotions}>
        <div className={styles.large}>
          <img alt="promotion-img-1" src="/images/promotions/1.jpg" />
        </div>
        <div className={styles.smallContainer}>
          <div className={styles.small}>
            <img alt="promotion-img-2" src="/images/promotions/2.jpg" />
          </div>
          <div className={styles.small}>
            <img alt="promotion-img-3" src="/images/promotions/3.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionsSection;
