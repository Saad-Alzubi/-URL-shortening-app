import React from "react";
import Form from "../Form/index";
import icon01 from "../../assets/icon-brand-recognition.svg";
import icon02 from "../../assets/icon-detailed-records.svg";
import icon03 from "../../assets/icon-fully-customizable.svg";
import Card from "../Card/index";
import ResultList from "../List/index";

import { InformationStyled, WrapperStyled } from "./info.style";

function Information() {
  return (
    <InformationStyled>
      <WrapperStyled>
        <Form />
        <ResultList />
        <h1>Advanced Statistics</h1>
        <p className="description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="card-list">
          <Card
            icon={icon01}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content."
            line={false}
          />
          <Card
            marginTop="8em"
            icon={icon02}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions."
            line={true}
          />
          <Card
            marginTop="11em"
            className="margin-2"
            icon={icon03}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement."
            line={true}
          />
        </div>
      </WrapperStyled>
    </InformationStyled>
  );
}

export default Information;
