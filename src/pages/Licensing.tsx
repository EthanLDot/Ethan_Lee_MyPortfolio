import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Licensing.module.css";
const ExperiencePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandDownDoubleClick = useCallback(() => {
    navigate("/portfolio-page");
  }, [navigate]);

  return (
    <div className={styles.experiencePage}>
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Image Sources</h1>
          </div>
          <div className={styles.scrollableText}>
            <div className={styles.experienceText}>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/anheuser-busch@3x.png'} alt="anheuser busch factory" />
                Image by John W. Iwanski via Flickr, licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC 2.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/coding-minds-academy@3x.png'} alt="coding classes" />
                Image by Katherine Connor via Jacobs School of Engineering, licensed under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/roottech@3x.png'} alt="remote learning" />
                Image by Katerina Holmes via Pexels, licensed under <a href="https://creativecommons.org/licenses/publicdomain/">Copyright-Only Dedication</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/taxi-time-prediction@3x.png'} alt="portuguese taxi" />
                Image by Jsoral under Wikimedia Commons, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/uc-san-diego@3x.png'} alt="ucsd rady school" />
                Image by Weststk under Wikimedia Commons, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/ucsd-zoo@3x.png'} alt="group of flamingos" />
                Image by Pedro Szekely via Flickr, licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={process.env.PUBLIC_URL + '/anheuser-busch.png'} alt="anheuser busch clydesdales" />
                Image by Defense Visual Information Distribution Service via Picryl, licensed under <a href="https://creativecommons.org/publicdomain/mark/1.0/">Public Domain</a>
              </li>
              <li className={styles.experienceText}>
                All other images AI-generated or from personal gallery.
              </li>
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
