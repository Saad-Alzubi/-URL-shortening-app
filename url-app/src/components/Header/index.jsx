import { React, useState } from "react";
import image from "../../assets/logo.svg";

import {
  StyledHeader,
  Nav,
  NavbarLink,
  OpenLinksButton,
  NavbarExtended,
  NavbarLinkExtended,
  NavRight,
  NavLeft,
} from "./header.style";

/**
 * Render the page Header.

 * @return {React.useState}
 */

function Header(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);


  

  return (
    <>
        <StyledHeader
          extendNavbar={extendNavbar}
        >
          <Nav>
            <img src={image} alt="Logo" height="40px" />
            <NavLeft>
              <NavbarLink href="./">Features</NavbarLink>
              <NavbarLink href="./">Pricing</NavbarLink>
              <NavbarLink href="./">Resources</NavbarLink>
            </NavLeft>
          </Nav>

          <NavRight>
            <NavbarLink href="/login">Login</NavbarLink>
            <NavbarLink className="signup" href="/">
              Sign Up
            </NavbarLink>
          </NavRight>

          <OpenLinksButton
            onClick={() => {
              setExtendNavbar(!extendNavbar);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </StyledHeader>
  

      <NavbarExtended extendNavbar={extendNavbar}>
        <NavbarLinkExtended href="./">Features</NavbarLinkExtended>
        <NavbarLinkExtended href="./">Pricing</NavbarLinkExtended>
        <NavbarLinkExtended href="./">Resources</NavbarLinkExtended>
        <span></span>
        <NavbarLinkExtended href="/login">Login</NavbarLinkExtended>
        <NavbarLinkExtended className="signup" href="/">
          Sign Up
        </NavbarLinkExtended>
      </NavbarExtended>
    </>
  );
}

export default Header;
