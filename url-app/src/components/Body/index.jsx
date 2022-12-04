import React from "react";
import imgBanner from "../../assets/illustration-working.svg";

import { MainStyled, Landing, Btn } from "./body.style";

function Main() {
  return (
    <MainStyled>
      <div className="content">
        <div className="img-banner">
          <img src={imgBanner} alt="img-main" />
        </div>

        <Landing>
          <div className="description-content">
            <h1>More that just shorter Links</h1>
            <p className="description">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="btn-content">
              <Btn>Get Started </Btn>
            </div>
          </div>
        </Landing>
      </div>
    </MainStyled>
  );
}

export default Main;
