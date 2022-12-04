import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: hsl(260, 8%, 14%);
  height: 4.3rem;
  font-family: "poppins";
  height: 20rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-top: 0rem;
    align-items: flex-start;
    height: 55rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 3rem;

  .social {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (max-width: 1200px) {
      margin-top: 3rem;
    }
  }

  .features {
    margin-left: 17%;
    @media (max-width: 1200px) {
      margin-left: 0;
      margin-top: 3rem;
    }
  }

  .logo {
    margin-left: 12%;
    @media (max-width: 1200px) {
      margin-left: 0;
      margin-top: 3rem;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1.5rem;
  font-family: "poppins";
  margin-top: 3rem;

  & h2 {
    color: white;
    font-weight: bold;
    font-family: "poppins";
  }

  @media (max-width: 1200px) {
    align-items: center;
    margin-left: 0rem;
  }
`;

export const NavbarLink = styled.a`
  color: hsl(0, 0%, 75%);
  font-size: medium;
  text-decoration: none;
  margin-bottom: 0.4rem;
  font-family: "poppins";
`;
