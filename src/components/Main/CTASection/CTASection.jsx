import styles from "./ctaSection.module.css";
import { motion } from "framer-motion";

function CTASection() {
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.mainCTA}>
      <motion.div
        className={styles.containerCTA}
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p variants={itemVariants}>
          CTA - IMAGEM OU TEXTO CLICAVEL PARA LEVAR AO ATENDIMENTO WHATSAPP
        </motion.p>
      </motion.div>
    </div>
  );
}

export default CTASection;
