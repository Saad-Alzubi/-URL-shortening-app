import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 7rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  position: fixed;
  overflow: hidden;
  z-index: 10;
  @media only screen and (max-width: 70rem) {
    height: 5rem;
  }
`;
export const Nav = styled.nav`
  margin-left: 12%;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 70rem) {
    & img {
      height: 30px;
      margin-left: -1.5rem;
    }
  }
`;

export const NavLeft = styled.nav`
  margin-top: -0.5rem;
  margin-left: 2rem;
  @media only screen and (max-width: 70rem) {
    display: none;
  }
`;

export const NavbarExtended = styled.div`
  width: 90%;
  margin-left: 5%;
  display: ${(props) => (props.extendNavbar ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  height: 100vh;
  background-color: hsl(257, 27%, 26%);
  margin-top: 4.2rem;
  z-index: 10;
  overflow: hidden;
  transform: translateX(0);
  transition: ease 0.3s;
  height: 25rem;
  align-items: center;
  border-radius: 0.5rem;
  .signup {
    background-color: hsl(180, 66%, 49%);
    color: white;
    padding: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    border-radius: 2.3rem;
  }

  & span {
    width: 90%;
    background-color: hsl(0, 0%, 75%);
    height: 1px;
    margin: 1rem;
    margin-top: 2rem;
  }

  @media (min-width: 70rem) {
    display: none;
  }
`;

export const NavRight = styled.header`
  display: flex;
  align-items: center;
  margin-right: 12%;
  .signup {
    background-color: hsl(180, 66%, 49%);
    color: white;
    padding: 0.75rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 2.3rem;
    margin-left: 3rem;
  }
  @media only screen and (max-width: 70rem) {
    display: none;
  }
`;

export const OpenLinksButton = styled.button`
  width: 2.5rem;
  height: 3.125rem;
  background: none;
  border: none;
  color: hsl(0, 0%, 75%);
  font-size: 2.8125rem;
  cursor: pointer;
  margin-left: 2%;
  @media only screen and (min-width: 70rem) {
    display: none;
    margin: 01rem;
  }
  @media only screen and (max-width: 70rem) {
    margin: 1rem;
  }
`;
export const NavbarLink = styled.a`
  padding-left: 0.5rem;
  color: hsl(0, 0%, 75%);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

export const NavbarLinkExtended = styled.a`
  padding-left: 1rem;
  padding-top: 1rem;
  color: white;
  font-weight: 600;
  font-size: 1.3em;
  font-family: sans-serif;
  text-decoration: none;
  margin: 0.625rem;
`;
