import styled from "./SideBar.module.scss";

const SideBar = ({ active }) => {
  return (
    <div
      className={`${styled.sidebar} ${active ? styled["active-sidebar"] : ""}`}
    >
      <div className={styled.wrapper}>
        <div className={styled.item}>INSTAGRAM</div>
        <div className={styled.item}>TWITTER</div>
        <div className={styled.item}>FACEBOOK</div>
      </div>
    </div>
  );
};

export default SideBar;
