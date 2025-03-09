"use client"

import styled from "styled-components"
import { Instagram, Linkedin } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const FooterSection = styled.footer`
  background-color: #1E1E1E;
  color: white;
  padding: 8rem 2rem 2rem; // Increased top padding
  min-height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 6rem 1rem 1rem; // Adjusted for mobile
  }
`

const FooterTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.fontxxl};
  font-weight: bold;
  margin-bottom: 4rem;
  text-align: center;
  color: white;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.fontlg};
`

const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`

const LogoDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  line-height: 1.6;
  margin-bottom: 1rem;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ColumnTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.fontmd};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const NavItem = styled.li`
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: ${(props) => props.theme.fontSizes.fontsm};
    
    &:hover {
      color: white;
    }
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 3rem 0 2rem;
`

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
  font-size: ${(props) => props.theme.fontSizes.fontxs};
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

// Function to handle smooth scrolling
const scrollToSection = (id, e) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const Footer = () => {
  return (
    <FooterSection id="contact">
      <AnimatedSection>
        <FooterTitle>Lets Connect there</FooterTitle>
      </AnimatedSection>

      <FooterContent>
        <AnimatedSection threshold={0.1}>
          <LogoSection>
            <Logo>
              <LogoCircle>TS</LogoCircle>
              Thasara
            </Logo>
            <LogoDescription>
              I bring a combination of technical skills, adaptability, and teamwork in to the working environment.
              My experience with IEEE, G17 and other leadership roles has honed my collaboration and problem-solving 
              abilities. I am eager to learn, and I take initiative to improve my skills,as seen in my portfolio projects.
            </LogoDescription>
            <SocialIcons>
              <SocialIcon href="https://www.instagram.com/thasara_danidi/" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
              <SocialIcon href="www.linkedin.com/in/thasara-surage-8b7369293" aria-label="LinkedIn">
                <Linkedin />
              </SocialIcon>
            </SocialIcons>
          </LogoSection>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.2s" }}>
          <Column>
            <ColumnTitle>Navigation</ColumnTitle>
            <NavList>
              <NavItem>
                <a href="#home" onClick={(e) => scrollToSection("home", e)}>
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a href="#about" onClick={(e) => scrollToSection("about", e)}>
                  About
                </a>
              </NavItem>
              <NavItem>
                <a href="#project" onClick={(e) => scrollToSection("project", e)}>
                  Project
                </a>
              </NavItem>
              <NavItem>
                <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>
                  Contact
                </a>
              </NavItem>
            </NavList>
          </Column>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.4s" }}>
          <Column>
            <ColumnTitle>Contact</ColumnTitle>
            <NavList>
              <NavItem>+94 772428588</NavItem>
              <NavItem>sthasara26@gmail.com</NavItem>
              <NavItem>portfolio-thasara.web.app</NavItem>
            </NavList>
          </Column>
        </AnimatedSection>
      </FooterContent>

      <Divider />

      <AnimatedSection threshold={0.1}>
        <Copyright>
          <div>Copyright© 2025 Thasara. All Rights Reserved.</div>
          <div>User Terms & Conditions | Privacy Policy</div>
        </Copyright>
      </AnimatedSection>
    </FooterSection>
  )
}

export default Footer;

