import styles from "./ctaSection.module.css";

function CTASection() {
  return (
    <div className={styles.mainCTA}>
      <div className={styles.containerCTA}>
        <p>CTA - IMAGEM OU TEXTO CLICAVEL PARA LEVAR AO ATENDIMENTO WHATSAPP</p>
      </div>
    </div>
  );
}

export default CTASection;
