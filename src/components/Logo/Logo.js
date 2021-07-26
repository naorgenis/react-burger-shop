import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";

function Logo(props) {
  return (
    <div>
      <img src={burgerLogo} alt="BurgerShop" width="40" height="34" />
    </div>
  );
}

export default Logo;
