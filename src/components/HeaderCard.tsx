import { FunctionComponent } from "react";
import styles from "./HeaderCard.module.css";

type HeaderCardType = {
  /** Action props */
  onLinkedInContainerClick?: () => void;
  onGithubContainerClick?: () => void;
};

const HeaderCard: FunctionComponent<HeaderCardType> = ({
  onLinkedInContainerClick,
  onGithubContainerClick,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.ethanLeeParent}>
        <h1 className={styles.ethanLee}>Ethan Lee</h1>
        <div className={styles.emailParent}>
          <div className={styles.email}>ethanlee2337@gmail.com</div>
          <div className={styles.email}>California, USA</div>
          <div className={styles.hyperlinks}>
            <div className={styles.button} onClick={onLinkedInContainerClick}>
              <div className={styles.linkButton}>LinkedIn</div>
            </div>
            <div className={styles.button2} onClick={onGithubContainerClick}>
              <div className={styles.linkButton}>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCard;
