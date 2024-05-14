import React from "react";
import { useEffect, useState } from "react";
import ClickerBtn from "../ClickerBtn/ClickerBtn";
import ClickerUpgrades from "../ClickerUpgrades/ClickerUpgrades";

function ClickerGui() {
  const [count, setCount] = useState(0);

  const [perClick, setPerClick] = useState(1);
  const [perSecond, setPerSecond] = useState(0);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const click = () => {
    setCount((count) => count + perClick);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + perSecond / 10);
      setCount((count) => Math.round(count * 100) / 100);
    }, 100);

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
      }, 50);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <ClickerUpgrades
          count={count}
          setCount={setCount}
          perClick={perClick}
          setPerClick={setPerClick}
          perSecond={perSecond}
          setPerSecond={setPerSecond}
        />
        <div className="clicker">
          <h1>InstaClicker</h1>
          <h1>{addCommas(Math.round(count).toLocaleString())}</h1>
          <ClickerBtn click={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default ClickerGui;
