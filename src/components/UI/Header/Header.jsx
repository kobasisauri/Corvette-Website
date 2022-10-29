import styled from "./Header.module.scss";
// import Logo from "../../../assets/logo-name.svg";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";

const Header = () => {
  return (
    <div className={styled.header}>
      <div>
        <Logo className={styled.logo} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
