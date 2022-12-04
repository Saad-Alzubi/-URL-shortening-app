import React from "react";

import bgBoostMobile from "../../assets/bg-boost-mobile.svg";
import bgBoostDesktop from "../../assets/bg-boost-desktop.svg";

import { SectionStyled, Btn } from "./banner.style";

function Banner() {
  return (
    <SectionStyled image={bgBoostMobile} imageDesktop={bgBoostDesktop}>
      <div className="content">
        <p className="text">
          <strong>Boost your links today</strong>
        </p>
        <div>
          <Btn>Get Started</Btn>
        </div>
      </div>
    </SectionStyled>
  );
}

export default Banner;
