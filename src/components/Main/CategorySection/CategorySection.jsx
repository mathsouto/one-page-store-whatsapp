import styles from "./categorySection.module.css";
import { TbHelmet } from "react-icons/tb";
import { PiCoatHangerBold } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function CategorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.mainCategory}>
      <div className={styles.containerCategory}>
        <motion.div
          className={styles.buttonsCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className={styles.boxCategory} variants={itemVariants}>
            <div className={styles.circleCategory}>
              <Link
                to="capacetes"
                smooth={true}
                duration={600}
                offset={-80}
                className={styles.navLink}
              >
                <TbHelmet className={styles.iconCategory} color="#003782" />
              </Link>
            </div>
            <p>Capacetes</p>
          </motion.div>

          <motion.div className={styles.boxCategory} variants={itemVariants}>
            <div className={styles.circleCategory}>
              <Link
                to="vestuario"
                smooth={true}
                duration={600}
                offset={-80}
                className={styles.navLink}
              >
                <PiCoatHangerBold
                  className={styles.iconCategory}
                  color="#003782"
                />
              </Link>
            </div>
            <p>Vestuario</p>
          </motion.div>

          <motion.div className={styles.boxCategory} variants={itemVariants}>
            <div className={styles.circleCategory}>
              <Link
                to="pecas"
                smooth={true}
                duration={600}
                offset={-80}
                className={styles.navLink}
              >
                <LuWrench className={styles.iconCategory} color="#003782" />
              </Link>
            </div>
            <p>Peças</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CategorySection;
