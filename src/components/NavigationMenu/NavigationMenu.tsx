import React, { Dispatch, SetStateAction } from "react";
import styles from "./NavigationMenu.module.css";
import clickerImg from "../../assets/clicker.svg";
import upgradeImg from "../../assets/upgrade.svg";
import currencyImg from "../../assets/currency.svg";

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
        <img src={clickerImg} alt="currency" width={"50%"} />
      </button>
      <button className={styles.button} onClick={() => handleButtonClick(2)}>
        <img src={upgradeImg} alt="currency" width={"50%"} />
      </button>
      <button className={styles.button} onClick={() => handleButtonClick(3)}>
        <img src={currencyImg} alt="currency" width={"50%"} />
      </button>
    </div>
  );
};

export default NavigationMenu;
