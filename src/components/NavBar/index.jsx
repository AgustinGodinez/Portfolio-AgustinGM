import { useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  CVButton,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#about">
          <DiCssdeck size="3rem" color="white" />
          <Span style={{ color: "white" }}>Agustin Godinez</Span>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <CVButton href={Bio.linkedin} target="display">
            <LinkedInIcon sx={{ marginRight: 1 }} /> LinkedIn
          </CVButton>
        </ButtonContainer>
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
          <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
          <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
          <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
          <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
          <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
          <CVButton href={Bio.linkedin} target="display" style={{ width: "max-content" }}>
            <LinkedInIcon sx={{ marginRight: 1 }} /> LinkedIn
          </CVButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};