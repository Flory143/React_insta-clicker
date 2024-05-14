import React from "react";
import styles from "./ClickerBtn.module.css";

interface Props {
  click: () => void;
}

const ClickerBtn: React.FC<Props> = ({ click }) => {
  return (
    <>
      <button className={styles.clickerBtn} onClick={click}>
        Click
      </button>
    </>
  );
};

export default ClickerBtn;
