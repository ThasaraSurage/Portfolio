import styled from "styled-components"

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1E1E1E;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  width: 90%;
  margin: 1rem auto;
`

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s ease, color 0.3s ease;

  ${({ active }) =>
    active &&
    `
    background-color: #FF8C42;
    font-weight: bold;
  `}

  &:hover {
    color: #FF8C42;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <MenuItem href="#home" active>Home</MenuItem>
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#resume">Resume</MenuItem>
      <MenuItem href="#project">Project</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
    </NavContainer>
  )
}

export default Navbar;


