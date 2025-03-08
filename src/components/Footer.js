"use client"

import styled from "styled-components"
import { Instagram, Linkedin } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const FooterSection = styled.footer`
  background-color: #1E1E1E;
  color: white;
  padding: 4rem 2rem 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem 1rem 1rem;
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
              <LogoCircle>JC</LogoCircle>
              JCREA
            </Logo>
            <LogoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </LogoDescription>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
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
                <a href="#resume" onClick={(e) => scrollToSection("resume", e)}>
                  Resume
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
              <NavItem>+91 7738443636</NavItem>
              <NavItem>Jaycrea36@gmail.com</NavItem>
              <NavItem>Portfolio-jcrea.com</NavItem>
            </NavList>
          </Column>
        </AnimatedSection>
      </FooterContent>

      <Divider />

      <AnimatedSection threshold={0.1}>
        <Copyright>
          <div>Copyright© 2023 Jayesh. All Rights Reserved.</div>
          <div>User Terms & Conditions | Privacy Policy</div>
        </Copyright>
      </AnimatedSection>
    </FooterSection>
  )
}

export default Footer;

