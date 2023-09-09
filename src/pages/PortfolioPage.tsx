import { FunctionComponent, useCallback } from "react";
import HeaderCard from "../components/HeaderCard";
import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";
import styles from "./PortfolioPage.module.css";
const PortfolioPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  const onButtonText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.portfolioPage}>
      <header className={styles.header}>
        <HeaderCard
          onButtonContainerClick={onButtonContainerClick}
          onButtonContainer1Click={onButtonContainer1Click}
        />
      </header>
      <main className={styles.frame}>
        <section className={styles.content}>
          <Gallery />
          <div className={styles.gallery}>
            <h2 className={styles.education}>Education</h2>
            <div className={styles.yonseiUniversityParent}>
              <div className={styles.yonseiUniversity}>
                <h3 className={styles.yonseiUniversity1}>Yonsei University</h3>
              </div>
              <div className={styles.ucSanDiego}>
                <h3 className={styles.yonseiUniversity1}>UC San Diego</h3>
              </div>
            </div>
          </div>
          <div className={styles.gallery}>
            <h2 className={styles.education}>Projects</h2>
            <div className={styles.howPrivateRuParent}>
              <div className={styles.howPrivateRu}>
                <h3 className={styles.yonseiUniversity1}>Travel Today</h3>
              </div>
              <div className={styles.covidInfectionsStudy}>
                <h3 className={styles.yonseiUniversity1}>
                  COVID Infections Study
                </h3>
              </div>
              <div className={styles.ucsdZoo}>
                <h3 className={styles.yonseiUniversity1}>UC San Diego Zoo</h3>
              </div>
              <div className={styles.taxiTimePrediction}>
                <h3 className={styles.yonseiUniversity1}>
                  Taxi Time Prediction
                </h3>
              </div>
              <div className={styles.howPrivateRu2}>
                <h3 className={styles.yonseiUniversity1}>How Private RU?</h3>
              </div>
              <div className={styles.personalPortfolio}>
                <h3 className={styles.yonseiUniversity1}>Personal Portfolio</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.button}>
          <div className={styles.button1} onClick={onButtonText2Click}>
            Back
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
