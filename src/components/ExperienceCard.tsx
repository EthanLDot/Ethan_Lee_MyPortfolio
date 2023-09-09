import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExperienceCard.module.css";
const ExperienceCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onThomsonReutersContainerClick = useCallback(() => {
    navigate("/experience-page");
  }, [navigate]);

  return (
    <div
      className={styles.thomsonReuters}
      onClick={onThomsonReutersContainerClick}
    >
      <h3 className={styles.thomsonReuters1}>Thomson Reuters</h3>
    </div>
  );
};

export default ExperienceCard;
