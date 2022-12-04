import styled from "styled-components";

export const SectionStyled = styled.div`
  height: 300px;
  background: hsl(260, 8%, 14%);
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${(props) => props.image});
  background-size: cover;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .text {
    font-family: "poppins";
    font-size: 1.5em;
    color: white;
  }

  @media (min-width: 1200px) {
    background-image: url(${(props) => props.imageDesktop});
    height: auto;
    padding: 2em 0em 4em 0em;
    .text {
      font-size: 2.2em;
    }
  }
`;

export const Btn = styled.strong`
  padding: 1.5rem 6rem;
  border-radius: 2.3rem;
  background: hsl(180, 66%, 49%);
  color: white;
  cursor: pointer;
  font-family: "poppins";
  font-size: 1.2rem;

  @media (max-width: 1200px) {
    padding: 1rem 3rem;
    border-radius: 2rem;
  }
`;
