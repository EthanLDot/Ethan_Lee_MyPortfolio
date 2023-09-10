import { FunctionComponent, useCallback } from "react";
import HeaderCard from "../components/HeaderCard";
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

  const onThomsonReutersContainerClick = useCallback(() => {
    navigate("/experience-page");
  }, [navigate]);

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
          <div className={styles.gallery}>
            <h2 className={styles.experiences}>Experiences</h2>
            <div className={styles.roottechParent}>
              <div className={styles.roottech}>
                <h3 className={styles.codingMindAcademy}>RootTech</h3>
              </div>
              <div className={styles.ucSanDiego}>
                <h3 className={styles.codingMindAcademy}>UC San Diego</h3>
              </div>
              <div className={styles.codingMindsAcademy}>
                <h3 className={styles.codingMindAcademy}>
                  Coding Mind Academy
                </h3>
              </div>
              <div className={styles.anheuserBusch}>
                <h3 className={styles.codingMindAcademy}>Anheuser Busch</h3>
              </div>
              <div
                className={styles.thomsonReuters}
                onClick={onThomsonReutersContainerClick}
              >
                <h3 className={styles.thomsonReuters1}>Thomson Reuters</h3>
              </div>
            </div>
          </div>
          <div className={styles.gallery1}>
            <h2 className={styles.experiences}>Education</h2>
            <div className={styles.yonseiUniversityParent}>
              <div className={styles.yonseiUniversity}>
                <h3 className={styles.codingMindAcademy}>Yonsei University</h3>
              </div>
              <div className={styles.ucSanDiego2}>
                <h3 className={styles.codingMindAcademy}>UC San Diego</h3>
              </div>
            </div>
          </div>
          <div className={styles.gallery1}>
            <h2 className={styles.experiences}>Projects</h2>
            <div className={styles.howPrivateRuParent}>
              <div className={styles.howPrivateRu}>
                <h3 className={styles.codingMindAcademy}>Travel Today</h3>
              </div>
              <div className={styles.covidInfectionsStudy}>
                <h3 className={styles.codingMindAcademy}>
                  COVID Infections Study
                </h3>
              </div>
              <div className={styles.ucsdZoo}>
                <h3 className={styles.codingMindAcademy}>UC San Diego Zoo</h3>
              </div>
              <div className={styles.taxiTimePrediction}>
                <h3 className={styles.codingMindAcademy}>
                  Taxi Time Prediction
                </h3>
              </div>
              <div className={styles.howPrivateRu2}>
                <h3 className={styles.codingMindAcademy}>How Private RU?</h3>
              </div>
              <div className={styles.personalPortfolio}>
                <h3 className={styles.codingMindAcademy}>Personal Portfolio</h3>
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
