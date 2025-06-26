import styles from "./aboutSection.module.css";

function AboutSection() {
  return (
    <div className={styles.mainAbout}>
      <div className={styles.titleContainer}>
        <div className={styles.titleAbout}>
          <h2>Sobre nós</h2>
        </div>
      </div>
      <div className={styles.containerAbout}>
        <div className={styles.contentAbout}>
          <div className={styles.textAbout}>
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
          </div>
          <div className={styles.imageAbout}>
            <img src="/images/about.jpg" alt="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
