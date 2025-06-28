import styles from "./brandsSection.module.css";
import { motion } from "framer-motion";

function BrandsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.mainBrands}>
      <motion.div
        className={styles.containerBrands}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <div className={styles.iconsBrands}>
          <motion.img
            alt="givi-logo"
            src="/images/brands/givi.png"
            variants={itemVariants}
          />
          <motion.img
            alt="gvs-logo"
            src="/images/brands/gvs.png"
            variants={itemVariants}
          />
          <motion.img
            alt="tmac-logo"
            src="/images/brands/tmac.png"
            variants={itemVariants}
          />
          <motion.img
            alt="protork-logo"
            src="/images/brands/protork.png"
            variants={itemVariants}
          />
          <motion.img
            alt="protork-logo"
            src="/images/brands/protork.png"
            variants={itemVariants}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default BrandsSection;
