import styled from "styled-components"

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1E1E1E;
  border-radius: 30px;
  margin: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0.5rem 1rem;
  }
`

const Logo = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }
`

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.fontmd};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontsm};
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>LOGO</Logo>
      <MenuItems>
        <MenuItem href="#about">ABOUT</MenuItem>
        <MenuItem href="#services">SERVICES</MenuItem>
        <MenuItem href="#blog">BLOG</MenuItem>
        <MenuItem href="#contact">CONTACT</MenuItem>
      </MenuItems>
    </NavContainer>
  )
}

export default Navbar;

