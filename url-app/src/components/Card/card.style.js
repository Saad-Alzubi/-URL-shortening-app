import styled from "styled-components";

export const CardStyled = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px;
  position: relative;
  margin: 5em 0em;
  height: 18rem !important;

  .content {
    padding: 3em 1.5em 2em 1.5em;
  }

  .icon {
    position: absolute;
    top: -2.5em;
    left: 0;
    right: 0;
    margin: auto;
  }

  img {
    padding: 1.3em;
    border-radius: 50%;
    background: hsl(257, 27%, 26%);
  }

  .title {
    margin: 1em 0em;
    line-height: 1.2em;
    font-size: 1.3em;
    font-weight: 700;
    color: hsl(257, 27%, 26%);
    font-family: "poppins";
  }

  .description-card {
    color: hsl(257, 7%, 63%);
    margin: 0;
    font-size: 1rem;
    line-height: 1.6em;
    font-weight: 500;
    font-family: "poppins";
  }
  @media (max-width: 1200px) {
    &::before {
      content: "";
      position: absolute;
      background: hsl(180, 66%, 49%);
      width: ${(props) => (props.line ? "0.45em" : "0")};
      height: 50px;
      top: ${(props) => (props.line ? "-5em" : "0")};
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  @media (min-width: 1200px) {
    margin-top: ${(props) => props.marginTop};
    text-align: left;
    height: min-content;

    .icon {
      left: 1.5em;
      right: auto;
    }

    &::before {
      content: "";
      position: absolute;
      border-color: hsl(180, 66%, 49%);
      border-style: solid;
      border-width: 0 0 0.4em 0;
      height: 1em;
      top: ${(props) => (props.line ? "50px" : "0")};
      left: ${(props) => (props.line ? "-30px" : "0")};
      width: ${(props) => (props.line ? "30px" : "0")};
    }
  }
`;
