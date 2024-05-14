import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./ClickerUpgrades.module.css";
import UpgradeBtn from "../UpgradeBtn/UpgradeBtn";

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  perClick: number;
  setPerClick: Dispatch<SetStateAction<number>>;
  perSecond: number;
  setPerSecond: Dispatch<SetStateAction<number>>;
}

const ClickerUpgrades: React.FC<Props> = ({
  count,
  setCount,
  perClick,
  setPerClick,
  perSecond,
  setPerSecond,
}) => {
  const [upgradeCostPerClick, setUpgradeCostPerClick] = useState(2);
  const [upgradeCostPerSecond, setUpgradeCostPerSecond] = useState(5);

  const upgradePerClick = () => {
    if (count >= upgradeCostPerClick) {
      setCount(count - upgradeCostPerClick);

      setUpgradeCostPerClick(
        Math.round(upgradeCostPerClick * (1 + Math.random() / 1.5))
      );

      setPerClick(Math.round(perClick + 50 * Math.random()));
    } else {
      return false;
    }
  };

  const upgradePerSecond = () => {
    if (count >= upgradeCostPerSecond) {
      setCount(count - upgradeCostPerSecond);
      setUpgradeCostPerSecond(
        Math.round(upgradeCostPerSecond * (1 + Math.random() / 1.5))
      );
      setPerSecond(Math.round(perSecond + 100 * Math.random()));
    } else {
      return false;
    }
  };

  return (
    <div className={styles.upgrades}>
      <h2>Улучшения</h2>
      <UpgradeBtn
        onClick={upgradePerClick}
        text={"Клик: " + perClick}
        cost={"Цена: " + upgradeCostPerClick}
      />
      <UpgradeBtn
        onClick={upgradePerSecond}
        text={"Клик: " + perSecond}
        cost={"Цена: " + upgradeCostPerSecond}
      />
    </div>
  );
};

export default ClickerUpgrades;
