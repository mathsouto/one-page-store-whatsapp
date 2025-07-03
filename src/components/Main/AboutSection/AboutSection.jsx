import styles from "./aboutSection.module.css";
import { motion } from "framer-motion";

function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className={styles.mainAbout}>
      <div className={styles.titleContainer}>
        <div className={styles.titleAbout}>
          <h2>Sobre nós</h2>
        </div>
      </div>
      <div className={styles.containerAbout}>
        <div className={styles.contentAbout}>
          <motion.div
            className={styles.textAbout}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>
              Estamos há 25 anos no mercado, com uma equipe capacitada de
              funcionários que promove um atendimento de excelência. Sendo
              referência em peças e acessórios para motos e com a missão de
              oferecer soluções práticas, com agilidade e alta qualidade,
              gerando satisfação e segurança a nossos clientes. Atendemos
              atacado e varejo, trabalhamos com as melhores marcas do mercado e
              contamos com mais de 35.000 itens em nosso estoque, garantindo
              qualidade.
            </p>
          </motion.div>
          <motion.div
            className={styles.imageAbout}
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src="/images/about/about.jpg" alt="about-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
