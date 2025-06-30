import styles from "./header.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <header>
      <div className={styles.containerHeader}>
        <div className={styles.navOne}>
          <a href="/">
            <img src="/images/logoColor.png" alt="logo" />
          </a>
        </div>
        <div className={styles.navTwo}>
          <div className={styles.navButtons}>
            <Link
              to="capacetes"
              smooth={true}
              duration={600}
              offset={-80}
              className={styles.navLink}
            >
              Capacetes
            </Link>
            <Link
              to="vestuario"
              smooth={true}
              duration={600}
              offset={-80}
              className={styles.navLink}
            >
              Vestuario
            </Link>
            <Link
              to="pecas"
              smooth={true}
              duration={600}
              offset={-80}
              className={styles.navLink}
            >
              Peças
            </Link>
          </div>
          <div className={styles.navSocials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={22} color="#fff" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} color="#fff" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={22} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
