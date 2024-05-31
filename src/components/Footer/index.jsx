import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/constants";
import {
  FooterContainer,
  FooterWrapper,
  Nav,
  NavLink,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./FooterStyle";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Agustin Godinez Montaño. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};
