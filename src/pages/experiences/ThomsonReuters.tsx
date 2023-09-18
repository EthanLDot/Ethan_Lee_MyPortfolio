import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Experience.module.css";
import { useEffect} from "react";
const ExperiencePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandDownDoubleClick = useCallback(() => {
    navigate("/portfolio-page");
  }, [navigate]);

  useEffect(() => {
    document.title = "Portfolio | Thomson Reuters";  
  }, []);

  return (
    <div className={styles.experiencePage}>
      <img
        className={styles.experiencePageChild}
        alt="thomson reuters-style office ai-generated"
        src="/thomson-reuters.png"
      />
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Thomson Reuters</h1>
            <div className={styles.frame1}>
              <div className={styles.locationDateContainer}>
                <p className={styles.experienceText}>Eagan, Minnesota</p>
                <p className={styles.experienceText}>06/2023 - 09/2023</p>
              </div>
            </div>
          </div>
          <div className={styles.scrollableText}>
          <div className={styles.experienceText}>
              <p className={styles.experienceText}>
                Work in progress. More information soon!
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
                Work in progress. More information soon!
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
                Work in progress. More information soon!
              </p>
            </div>
          </div>
        </div>
        <button
          className={styles.expandDownDouble}
          onClick={onExpandDownDoubleClick}
        >
          <img
            className={styles.expandDownTop}
            alt=""
            src="/vector-10.svg"
          />
          <img
            className={styles.expandDownTop}
            alt=""
            src="/vector-91.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
