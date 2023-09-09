import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import styles from "./HomePage.module.css";
const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  const onExpandDownDoubleClick = useCallback(() => {
    navigate("/portfolio-page");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <footer className={styles.footer}>
        <button
          className={styles.expandDownDouble}
          onClick={onExpandDownDoubleClick}
        >
          <img
            className={styles.expandDownDoubleChild}
            alt=""
            src="/vector-9.svg"
          />
          <img
            className={styles.expandDownDoubleItem}
            alt=""
            src="/vector-9.svg"
          />
        </button>
      </footer>
      <main className={styles.iMakeTechnologyCoolForEveWrapper}>
        <span className={styles.iMakeTechnology}>
          I make technology cool for everyone.
        </span>
      </main>
      <CardContainer />
    </div>
  );
};

export default HomePage;
