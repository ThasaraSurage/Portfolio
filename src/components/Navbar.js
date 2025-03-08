"use client"

import { useState, useEffect } from "react"
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
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
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
    color: ${(props) => (props.active ? "white" : "#FF8C42")};
  }
`

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home")

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; // Height of navbar plus desired spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  // Handle click on menu items
  const handleItemClick = (item, e) => {
    e.preventDefault()
    setActiveItem(item)
    scrollToSection(item)
  }

  // Update active menu item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Get all sections
      const homeSection = document.getElementById("home")
      const aboutSection = document.getElementById("about")
      const projectSection = document.getElementById("project")
      const contactSection = document.getElementById("contact")

      // Get positions of each section
      // const homeSectionTop = homeSection?.offsetTop || 0
      const aboutSectionTop = aboutSection?.offsetTop || 0
      const projectSectionTop = projectSection?.offsetTop || 0
      const contactSectionTop = contactSection?.offsetTop || 0

      // Determine which section is currently in view
      if (scrollPosition >= contactSectionTop - 200) {
        setActiveItem("contact")
      } else if (scrollPosition >= projectSectionTop - 200) {
        setActiveItem("project")
      } else if (scrollPosition >= aboutSectionTop - 200) {
        setActiveItem("about")
      } else {
        setActiveItem("home")
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial call to set the active item based on initial scroll position
    handleScroll()

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavContainer>
      <MenuItem href="#home" active={activeItem === "home"} onClick={(e) => handleItemClick("home", e)}>
        Home
      </MenuItem>
      <MenuItem href="#about" active={activeItem === "about"} onClick={(e) => handleItemClick("about", e)}>
        About
      </MenuItem>
      <MenuItem href="#project" active={activeItem === "project"} onClick={(e) => handleItemClick("project", e)}>
        Project
      </MenuItem>
      <MenuItem href="#contact" active={activeItem === "contact"} onClick={(e) => handleItemClick("contact", e)}>
        Contact
      </MenuItem>
    </NavContainer>
  )
}

export default Navbar;

