import styles from "./footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.infoFooter}>
          <div className={styles.phoneFooter}>
            <div className={styles.iconWrapper}>
              <FaPhoneAlt size={20} />
            </div>
            <p>(11) 2713-4750</p>
          </div>
          <div className={styles.emailFooter}>
            <div className={styles.iconWrapper}>
              <FaEnvelope size={20} />
            </div>
            <p>cpd@wingmotos.com.br</p>
          </div>
          <div className={styles.addresFooter}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt size={20} />
            </div>
            <p>
              R. Gen. Osório, 495
              <br />
              <strong>Santa Ifigênia, São Paulo - SP</strong>
            </p>
          </div>
        </div>

        <div className={styles.socialsFooter}>
          <div className={styles.logoFooter}>
            <img src="/images/logoWhite.png" alt="logo" />
          </div>
          <div className={styles.iconsFooter}>
            <div className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}>
              <a href="">
                <FaFacebook size={20} />
              </a>
            </div>
            <div className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}>
              <a href="">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}>
              <a href="">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightsFooter}>
        <p>© Todos os direitos reservados - 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
