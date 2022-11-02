import { useState, useEffect } from "react";
import Header from "../../components/UI/Header";
import SideBar from "../../components/UI/SideBar";
import SideComponent from "../../components/SideComponent";
import LockSpin from "../../components/UI/LockSpin";
import car from "../../assets/corvette1.png";

import { ReactComponent as Lock } from "../../assets/lock.svg";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import styled from "./Home.module.scss";

function Home() {
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setDisplay(false);
      }, 1000);
    }
  }, [active]);

  return (
    <div>
      <Header />
      {display && (
        <div
          className={`${styled.name} ${active ? styled["active-name"] : ""}`}
        >
          STINGRAY
        </div>
      )}
      {display && (
        <LockSpin
          onClick={() => setActive(true)}
          active={active}
          icon={<Lock />}
        />
      )}

      <div className={`${!display ? styled.container : ""}`}>
        {!display && <SideComponent active={active} />}
        <img
          className={`${styled.car} ${active ? styled["active-car"] : ""}`}
          src={car}
          alt="car"
        />
      </div>
      {display && <SideBar active={active} />}

      {display && (
        <div
          className={`${styled["icons-wrapper"]} ${
            active ? styled["active-icons"] : ""
          }`}
        >
          <div className={styled["icon-border"]}>
            <LeftArrow className={styled.icon} />
          </div>
          <div className={styled["icon-border"]}>
            <RightArrow className={styled.icon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
