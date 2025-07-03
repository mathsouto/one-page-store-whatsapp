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
            alt="protork-logo"
            src="/svgs/protork.svg"
            variants={itemVariants}
          />
          <motion.img
            alt="tmac-logo"
            src="/svgs/tmac.svg"
            variants={itemVariants}
          />
          <motion.img
            alt="cr-logo"
            src="/svgs/cr.svg"
            variants={itemVariants}
          />
          <motion.img
            alt="maggion-logo"
            src="/svgs/maggion.svg"
            variants={itemVariants}
          />
          <motion.img
            alt="brms-logo"
            src="/svgs/brms.svg"
            variants={itemVariants}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default BrandsSection;
