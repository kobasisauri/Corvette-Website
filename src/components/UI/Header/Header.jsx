import styled from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { useState } from "react";
import { act } from "react-dom/test-utils";

const tabEnam = {
  home: "Home",
  about: "About",
  shop: "Shop",
};

const tabArr = ["Home", "About", "Shop"];

const Header = () => {
  const [active, setActive] = useState(tabEnam.home);

  return (
    <div className={styled.header}>
      <div>
        <Logo className={styled.logo} />
      </div>
      <div className={styled.items}>
        {tabArr.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className={item === active ? styled.active : ""}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styled.search}>
        <div>
          <SearchIcon className={styled["search-icon"]} />
        </div>
        <div className={styled["burger-wrapper"]}>
          <div className={styled.burger} />
          <div className={styled.burger} />
          <div className={styled.burger} />
        </div>
      </div>
    </div>
  );
};

export default Header;
