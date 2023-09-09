import { FunctionComponent } from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./Gallery.module.css";
const Gallery: FunctionComponent = () => {
  return (
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
          <h3 className={styles.codingMindAcademy}>Coding Mind Academy</h3>
        </div>
        <div className={styles.anheuserBusch}>
          <h3 className={styles.codingMindAcademy}>Anheuser Busch</h3>
        </div>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Gallery;
