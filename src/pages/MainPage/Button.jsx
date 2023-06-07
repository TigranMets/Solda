import React from "react";
import "./mainpage.scss";

const Button = () => {
  return (
    <div
      style={{
        marginTop: "18px",
      }}
    >
      <button className="sale">Продажи</button>
      <button className="purchases">Количество</button>
    </div>
  );
};
export default Button;
