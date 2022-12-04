import React from "react";

import { CardStyled } from "./card.style";

function Card({ icon, title, description, marginTop, line }) {
  console.log(line);
  return (
    <CardStyled marginTop={marginTop} line={line}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description-card">{description}</p>
      </div>
    </CardStyled>
  );
}

export default Card;
