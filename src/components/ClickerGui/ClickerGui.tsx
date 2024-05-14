import React from "react";
import { useEffect, useState } from "react";
import ClickerBtn from "../ClickerBtn/ClickerBtn";
import ClickerUpgrades from "../ClickerUpgrades/ClickerUpgrades";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import styles from "./ClickerGui.module.css";
import currencyImg from "../../assets/currency.svg";

function ClickerGui() {
  const [count, setCount] = useState(100000);

  const [perClick, setPerClick] = useState(1);
  const [perSecond, setPerSecond] = useState(0);
  const [upgradeCostPerClick, setUpgradeCostPerClick] = useState(10);
  const [upgradeCostPerSecond, setUpgradeCostPerSecond] = useState(100);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [currentComponent, setCurrentComponent] = useState(1);

  const click = () => {
    setCount((count) => count + perClick);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + perSecond / 100);
      setCount((count) => Math.round(count * 100) / 100);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [perSecond]);

  const addCommas = (nStr: string) => {
    nStr += "";
    const x = nStr.split(" ");
    let x1 = x[0];
    const x2 = x.length > 1 ? "." + x[1] : "";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      click();
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 80);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>InstaClicker</h1>
        <div className={styles.currency}>
          <h1>{addCommas(Math.round(count).toLocaleString())}</h1>
          <img src={currencyImg} alt="asd" width={"30px"} />
        </div>

        {currentComponent === 1 ? (
          <ClickerBtn click={handleButtonClick} />
        ) : currentComponent === 2 ? (
          <ClickerUpgrades
            count={count}
            setCount={setCount}
            perClick={perClick}
            setPerClick={setPerClick}
            perSecond={perSecond}
            setPerSecond={setPerSecond}
            upgradeCostPerClick={upgradeCostPerClick}
            setUpgradeCostPerClick={setUpgradeCostPerClick}
            upgradeCostPerSecond={upgradeCostPerSecond}
            setUpgradeCostPerSecond={setUpgradeCostPerSecond}
          />
        ) : null}
        <div className="clicker"></div>
        <NavigationMenu setCurrentComponent={setCurrentComponent} />
      </div>
    </div>
  );
}

export default ClickerGui;
