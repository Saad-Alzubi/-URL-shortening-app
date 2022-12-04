import React from "react";
import image from "../../assets/footer-logo.svg";
import Facebook from "../../assets/facebook-icon.svg";
import Twitter from "../../assets/twitter-icon.svg";
import Pinterest from "../../assets/painterest-icon.svg";
import Instagram from "../../assets/instgram-icon.svg";

import { StyledFooter, StyledDiv, NavbarLink, Container } from "./footer.style";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img className="logo" src={image} alt="Logo" height="40px" />
        <StyledDiv className="features">
          <h2>Features</h2>
          <NavbarLink href="./">ALink Shortening</NavbarLink>
          <NavbarLink href="./">Branded Links</NavbarLink>
          <NavbarLink href="./">analytics</NavbarLink>
        </StyledDiv>

        <StyledDiv>
          <h2>Resources</h2>
          <NavbarLink href="./">Blog</NavbarLink>
          <NavbarLink href="./">Developers</NavbarLink>
          <NavbarLink href="./">Suport</NavbarLink>
        </StyledDiv>

        <StyledDiv>
          <h2>Company</h2>
          <NavbarLink href="./">About</NavbarLink>
          <NavbarLink href="./">Our Team</NavbarLink>
          <NavbarLink href="./">Careers</NavbarLink>
          <NavbarLink href="./">Contact</NavbarLink>
        </StyledDiv>

        <div className="social">
          <img src={Facebook} alt="icon-facebook" />
          <img src={Twitter} alt="icon-twitter" />
          <img src={Pinterest} alt="icon-pinterest" />
          <img src={Instagram} alt="icon-instagram" />
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
