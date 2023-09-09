import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExperiencePage.module.css";
const ExperiencePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandDownDoubleClick = useCallback(() => {
    navigate("/portfolio-page");
  }, [navigate]);

  return (
    <div className={styles.experiencePage}>
      <img
        className={styles.experiencePageChild}
        alt=""
        src="/frame-10@2x.png"
      />
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Sample Item</h1>
            <div className={styles.frame1}>
              <div className={styles.anystateUsMmyyyyContainer}>
                <p className={styles.anystateUs}>Anystate, US</p>
                <p className={styles.anystateUs}>MM/YYYY - MM/YYYY</p>
              </div>
            </div>
          </div>
          <div className={styles.scrollableText}>
            <div className={styles.experienceText}>
              <p className={styles.anystateUs}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className={styles.anystateUs}>&nbsp;</p>
              <p className={styles.anystateUs}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className={styles.anystateUs}>&nbsp;</p>
              <p className={styles.anystateUs}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <button
          className={styles.expandDownDouble}
          onClick={onExpandDownDoubleClick}
        >
          <img
            className={styles.expandDownDoubleChild}
            alt=""
            src="/vector-10.svg"
          />
          <img
            className={styles.expandDownDoubleChild}
            alt=""
            src="/vector-91.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
