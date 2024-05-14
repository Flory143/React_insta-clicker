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
  const [upgradeCostPerClick, setUpgradeCostPerClick] = useState(10);
  const [upgradeCostPerSecond, setUpgradeCostPerSecond] = useState(100);

  const upgradePerClick = () => {
    if (count >= upgradeCostPerClick) {
      setCount(count - upgradeCostPerClick);

      perClick === 1 ? setPerClick(5) : setPerClick(perClick + 5);

      setUpgradeCostPerClick(
        Math.round((upgradeCostPerClick / perClick + 5) * perClick)
      );
    } else {
      return false;
    }
  };

  const upgradePerSecond = () => {
    if (count >= upgradeCostPerSecond) {
      setCount(count - upgradeCostPerSecond);

      setPerSecond(perSecond + 5);

      setUpgradeCostPerSecond(
        (upgradeCostPerSecond / (perSecond + 1) + 10) * 100
      );
    } else {
      return false;
    }
  };

  return (
    <div className={styles.upgrades}>
      <h2>Улучшения</h2>
      <div className={styles.upgradesBtns}>
        <UpgradeBtn
          onClick={upgradePerClick}
          text={"Клик: " + perClick}
          cost={"Цена: " + upgradeCostPerClick}
        />
        <UpgradeBtn
          onClick={upgradePerSecond}
          text={"В секунду: " + perSecond}
          cost={"Цена: " + upgradeCostPerSecond}
        />
      </div>
    </div>
  );
};

export default ClickerUpgrades;
