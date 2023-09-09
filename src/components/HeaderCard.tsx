import { FunctionComponent } from "react";
import styles from "./HeaderCard.module.css";

type HeaderCardType = {
  /** Action props */
  onButtonContainerClick?: () => void;
  onButtonContainer1Click?: () => void;
};

const HeaderCard: FunctionComponent<HeaderCardType> = ({
  onButtonContainerClick,
  onButtonContainer1Click,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.ethanLeeParent}>
        <h1 className={styles.ethanLee}>Ethan Lee</h1>
        <div className={styles.emailParent}>
          <div className={styles.email}>ethanlee2337@gmail.com</div>
          <div className={styles.email}>California, USA</div>
          <div className={styles.hyperlinks}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.button1}>LinkedIn</div>
            </div>
            <div className={styles.button2} onClick={onButtonContainer1Click}>
              <div className={styles.button3}>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCard;
