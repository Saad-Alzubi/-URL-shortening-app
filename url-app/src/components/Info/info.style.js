import styled from "styled-components";

export const InformationStyled = styled.div`
  text-align: center;
  background: #f0f1f6;
  padding: 8em 0em 1em 0em;

  h1 {
    margin: 1em 0em;
    line-height: 1.2em;
    font-size: 1.5em;
    font-weight: 700;
    color: hsl(260, 8%, 14%);
    font-family: "poppins";
    font-weight: 700;
  }

  .description {
    color: hsl(257, 7%, 63%);
    margin: 0;
    font-size: 1rem;
    line-height: 1.5em;
    font-weight: 500;
    font-family: "poppins";
  }

  @media (min-width: 1200px) {
    .description {
      width: 50%;
      margin: auto;
      font-size: 1.1em;
      font-weight: 900;
    }
    h1 {
      font-size: 2.5em;
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
    }
  }
`;

export const WrapperStyled = styled.div`
  max-width: 1312px;
  margin: auto;
  padding: 0 1rem;

  @media (min-width: 1200px) {
    padding: 0 160px;
  }
`;
