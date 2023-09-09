import { FunctionComponent, useCallback } from "react";
import HeaderCard from "./HeaderCard";
import styles from "./CardContainer.module.css";
const CardContainer: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  return (
    <section className={styles.header}>
      <HeaderCard
        onButtonContainerClick={onButtonContainerClick}
        onButtonContainer1Click={onButtonContainer1Click}
      />
    </section>
  );
};

export default CardContainer;
