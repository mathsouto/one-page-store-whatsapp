import styles from "./categorySection.module.css";
import { TbHelmet } from "react-icons/tb";
import { PiCoatHangerBold } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { Link } from "react-scroll";

function CategorySection() {
  return (
    <div className={styles.mainCategory}>
      <div className={styles.containerCategory}>
        <div className={styles.buttonsCategory}>
          <div className={styles.boxCategory}>
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
          </div>
          <div className={styles.boxCategory}>
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
          </div>
          <div className={styles.boxCategory}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
