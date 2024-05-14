import React, { Dispatch, SetStateAction } from "react";
import styles from "./NavigationMenu.module.css";
import Upgrade from "../../assets/upgrade.svg";

interface Props {
  setCurrentComponent: Dispatch<SetStateAction<number>>;
}

const NavigationMenu: React.FC<Props> = ({ setCurrentComponent }) => {
  const handleButtonClick = (value: number) => {
    setCurrentComponent(value);
  };

  return (
    <div className={styles.navigationMenu}>
      <button className={styles.button} onClick={() => handleButtonClick(1)}>
        1
      </button>
      <button className={styles.button} onClick={() => handleButtonClick(2)}>
        <Upgrade />
      </button>
      <button className={styles.button} onClick={() => handleButtonClick(3)}>
        3
      </button>
    </div>
  );
};

export default NavigationMenu;
