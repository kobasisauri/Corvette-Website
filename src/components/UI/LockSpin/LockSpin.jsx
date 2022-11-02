import React from "react";

import styled from "./LockSpin.module.scss";

const LockSpin = ({ onClick, active, icon, className }) => {
  return (
    <div
      className={`${styled.wrapper} ${active ? styled["active-wrapper"] : ""} ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      <div className={styled.loader} />
      {icon}
    </div>
  );
};

export default LockSpin;
