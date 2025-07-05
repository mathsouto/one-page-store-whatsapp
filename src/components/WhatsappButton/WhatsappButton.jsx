import styles from "./WhatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "551127134750";
  const message = "Olá, vim do site e gostaria de mais informações.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsappButton;
