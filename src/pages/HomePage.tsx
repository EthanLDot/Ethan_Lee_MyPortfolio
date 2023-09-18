import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import styles from "./HomePage.module.css";
const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkedInContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onGithubContainerClick = useCallback(() => {
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
            className={styles.expandDownTop}
            alt=""
            src="/vector-9.svg"
          />
          <img
            className={styles.expandDownBottom}
            alt=""
            src="/vector-9.svg"
          />
        </button>
      </footer>
      <main className={styles.content}>
        <span className={styles.title}>
          I make technology cool for everyone.
        </span>
      </main>
      <CardContainer />
    </div>
  );
};

export default HomePage;
