import styles from "./footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className={styles.mainFooter}>
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
              <a href="/">
                <img src="/images/logoWhite.png" alt="logo" />
              </a>
            </div>
            <div className={styles.iconsFooter}>
              <div
                className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}
              >
                <a href="">
                  <FaFacebook size={20} />
                </a>
              </div>
              <div
                className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}
              >
                <a href="">
                  <FaInstagram size={20} />
                </a>
              </div>
              <div
                className={`${styles.iconWrapper} ${styles.iconSocialFooter}`}
              >
                <a href="">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineFooter}></div>
        <div className={styles.endFooter}>
          <div className={styles.endMenuFooter}>
            <Link to="capacetes" smooth={true} duration={600} offset={-80}>
              Capacetes
            </Link>
            <Link to="vestuario" smooth={true} duration={600} offset={-80}>
              Vestuario
            </Link>
            <Link to="pecas" smooth={true} duration={600} offset={-80}>
              Peças
            </Link>
          </div>
          <p className={styles.copyFooter}>© 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
