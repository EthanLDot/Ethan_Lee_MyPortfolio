import { FunctionComponent, useCallback } from "react";
import HeaderCard from "./HeaderCard";
import styles from "./CardContainer.module.css";
const CardContainer: FunctionComponent = () => {
  const onLinkedInContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onGithubContainerClick = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  return (
    <section className={styles.header}>
      <HeaderCard
        onLinkedInContainerClick={onLinkedInContainerClick}
        onGithubContainerClick={onGithubContainerClick}
      />
    </section>
  );
};

export default CardContainer;
