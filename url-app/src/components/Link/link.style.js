import styled from "styled-components";

export const LinkResultStyled = styled.div`
  background-color: white;
  border-radius: 10px;
  font-family: "poppins";
  font-weight: 500;

  .url-header {
    padding: 0.7em 1em;
    border-bottom: 1px solid white;
    text-align: left;
  }
  .url-content {
    padding: 0em 1em 1em 1em;
  }

  .short-url {
    text-align: left;
    padding: 0.8em 0em;
    color: hsl(180, 66%, 49%);
    margin: auto 0px;
  }
  .btn-copied {
    padding: 0.5em;
    background: ${(props) =>
      props.isCopy ? "hsl(257, 27%, 26%)" : " hsl(180, 66%, 49%)"};
    color: white;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5px;

    .url-header {
    }
    .url-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 20px;
      padding: 0 20px;
    }
    .short-url {
      color: hsl(180, 66%, 49%);
    }

    .content-btn-copied {
      align-self: center;
    }
    .btn-copied {
      padding: 0.5em 1.5em;
      font-size: 0.75em;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
`;
