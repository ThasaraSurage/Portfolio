import styled from "styled-components"

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
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontxl};
    margin-bottom: 2rem;
  }
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  gap: 1rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.fontlg};
`

const LogoCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
`

const LogoDescription = styled.p`
  color: ${(props) => `rgba(255, 255, 255, 0.7)`};
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  line-height: 1.6;
  margin-bottom: 1rem;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const LinkTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.fontmd};
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const LinkItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  color: rgba(255, 255, 255, 0.7);
`

const Copyright = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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

const Footer = () => {
  return (
    <FooterSection>
      <FooterTitle>Lets Connect there</FooterTitle>

      <FooterContent>
        <LogoSection>
          <Logo>
            <LogoCircle />
            THASARA
          </Logo>
          <LogoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue vel libero eget tincidunt. Aenean vitae
            magna in ipsum tincidunt efficitur.
          </LogoDescription>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              f
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              t
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              i
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              in
            </SocialIcon>
            <SocialIcon href="#" aria-label="GitHub">
              g
            </SocialIcon>
          </SocialIcons>
        </LogoSection>

        <LinksSection>
          <LinkTitle>Navigation</LinkTitle>
          <LinksList>
            <LinkItem>
              <a href="#home">Home</a>
            </LinkItem>
            <LinkItem>
              <a href="#about">About</a>
            </LinkItem>
            <LinkItem>
              <a href="#services">Services</a>
            </LinkItem>
            <LinkItem>
              <a href="#blog">Blog</a>
            </LinkItem>
            <LinkItem>
              <a href="#contact">Contact</a>
            </LinkItem>
          </LinksList>
        </LinksSection>

        <ContactSection>
          <LinkTitle>Contact</LinkTitle>
          <ContactItem>
            <span>📧</span>
            <span>sthasara26@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <span>📱</span>
            <span>+94 772428588</span>
          </ContactItem>
        </ContactSection>
      </FooterContent>

      <Copyright>
        <div>Copyright © 2023 Thasara. All Rights Reserved.</div>
        <div>User Terms & Conditions • Privacy Policy</div>
      </Copyright>
    </FooterSection>
  )
}

export default Footer;

