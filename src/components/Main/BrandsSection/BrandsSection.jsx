import styles from "./brandsSection.module.css";

function BrandsSection() {
  return (
    <div className={styles.mainBrands}>
      <div className={styles.containerBrands}>
        <div className={styles.iconsBrands}>
          <img alt="givi-logo" src="/images/brands/givi.png" />
          <img alt="gvs-logo" src="/images/brands/gvs.png" />
          <img alt="tmac-logo" src="/images/brands/tmac.png" />
          <img alt="protork-logo" src="/images/brands/protork.png" />
          <img alt="protork-logo" src="/images/brands/protork.png" />
        </div>
      </div>
    </div>
  );
}

export default BrandsSection;
