import React from "react";
import styles from "./UpgradeBtn.module.css";

interface Props {
  onClick: () => void;
  text: string;
  cost: string;
}

const ClickerBtn: React.FC<Props> = ({ onClick, text, cost }) => {
  return (
    <>
      <button className={styles.upgradeBtn} onClick={onClick}>
        <p>{text}</p>
        <p>{cost}</p>
      </button>
    </>
  );
};

export default ClickerBtn;
