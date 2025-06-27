import { useEffect, useState } from "react";
import styles from "./promotionsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

function PromotionsSection() {
  const largeVariants = {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const smallVariants = {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

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
        <motion.div
          className={styles.large}
          variants={largeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img alt="promotion-img-1" src="/images/promotions/1.jpg" />
        </motion.div>
        <motion.div
          className={styles.smallContainer}
          variants={smallVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.small}>
            <img alt="promotion-img-2" src="/images/promotions/2.jpg" />
          </div>
          <div className={styles.small}>
            <img alt="promotion-img-3" src="/images/promotions/3.jpg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PromotionsSection;
