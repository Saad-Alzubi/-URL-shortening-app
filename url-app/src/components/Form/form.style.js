import styled from "styled-components";
import bgShortenMobile from "../../assets/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../assets/bg-shorten-desktop.svg";

export const FormStyled = styled.div`
  width: 100%;
  border-radius: 15px;
  height: auto;
  background: hsl(260, 8%, 14%);
  margin-top: -220px;
  margin-bottom: 80px;
  background-image: url(${bgShortenMobile});
  background-size: 80%;
  background-position: 70px -20px;
  background-repeat: no-repeat;

  .content-form {
    padding: 22px;
  }

  .input-link {
    width: 100%;
    height: 44px;
    border: ${(props) => (props.alert ? "4px solid #e7666b" : "none")};
    border-radius: 5px;
    font-size: 0.8em;
    font-family: "poppins";
    color: hsl(257, 7%, 63%);
    font-weight: bold;
    box-sizing: border-box;
    padding: 22px;
  }

  .btn-shorten {
    width: 100%;
    margin: 0px;
    height: 44px;
    border-radius: 5px;
    background: hsl(180, 66%, 49%);
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;
    font-family: "poppins";
    font-weight: 700;
    justify-content: center;
    margin-top: 22px;
  }

  .btn-shorten:hover {
    background: hsl(180, 66%, 49%);
  }

  .alert {
    color: #e7666b;
    text-align: left;
    font-family: "poppins";
    font-size: 0.7em;
    margin-top: 0.5em;
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: 1200px) {
    margin-top: -210px;
    background-image: url(${bgShortenDesktop});
    background-size: 100%;
    background-position: 0;
    .content-form {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-column-gap: 44px;
      padding: 44px;
    }
    .alert {
      grid-column: 1;
      grid-row: 2;
    }
    .input-link {
      width: calc(100%-40px);
      height: 50px;
    }
    .btn-shorten {
      margin: 0px;
      width: 100%;
      height: 50px;
    }
  }
`;
