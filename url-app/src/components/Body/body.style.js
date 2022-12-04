import styled from "styled-components";

export const MainStyled = styled.div`
  font-family: "poppins";
  text-align: center;
  padding-bottom: 8em;
  background: white;

  .content {
    display: grid;
    grid-gap: 1.875rem;
  }

  .img-banner {
    margin-top: 5em;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 130%;
    margin-left: 20px;
  }

  h1 {
    margin: 0;
    line-height: 1.2em;
    font-size: 2em;
    color: hsl(260, 8%, 14%);
  }

  .description {
    color: hsl(257, 7%, 63%);
  }

  .btn-content {
    margin: 1.9em 0em;
  }

  @media (min-width: 75rem) {
    .content {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      grid-template-rows: auto;
      grid-column-gap: 1.875rem;
      height: auto;
    }
    .description-content {
      margin-top: 9em;
      grid-column: 1;
      grid-row: 1;
      text-align: left;
    }

    .description-content h1 {
      font-size: 3em;
    }

    .description {
      font-size: 1.3em;
    }

    .img-banner {
      grid-column: 2;
      grid-row: 1;
    }

    .img-banner {
      margin-top: 9em;
    }
    img {
      width: 120%;
      margin-left: 0rem;
    }
  }
`;

export const Landing = styled.div`
  max-width: 90rem;
  margin: auto;
  padding: 0 1rem;

  @media (min-width: 75rem) {
    padding: 0 10rem;
  }
`;

export const Btn = styled.strong`
  padding: 0.8125rem 2.8125rem;
  border-radius: 1.5625rem;
  background: hsl(180, 66%, 49%);
  color: white;
  cursor: pointer;
`;
