"use client"
import styled from "styled-components"
import AnimatedSection from "./AnimatedSection"

const PortfolioSection = styled.section`
  padding: 8rem 2rem 2rem; // Reduced bottom padding
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: auto; // Changed from 100vh to auto

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 6rem 1rem 1rem; // Reduced bottom padding
  }
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.fontxxl};
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontxl};
  }
`

const ColoredText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  font-size: ${(props) => props.theme.fontSizes.fontmd};
  line-height: 1.6;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontsm};
  }
`

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    background-color: #E56717;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }
`

const SkillTag = styled.div`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }
`

const Portfolio = () => {
  // Function to open the resume PDF in a new tab
  const openResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <PortfolioSection id="about">
      <AnimatedSection>
        <Title>
          More about my <ColoredText>Self</ColoredText>
        </Title>
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <Description>
          I'm passionate about technology and problem-solving, which led me to explore different areas, including web
          development, machine learning, and software engineering. I have been actively involved with IEEE for the pst
          two years at my university, where I contributed to organizing events as well as participating in competitions
          and hackathons.
        </Description>
      </AnimatedSection>

      <AnimatedSection threshold={0.3} id="resume">
        <Button onClick={openResume}>Resume →</Button>
      </AnimatedSection>

      <AnimatedSection threshold={0.4}>
        <SkillsContainer>
          <SkillTag>UX Design</SkillTag>
          <SkillTag>App Design</SkillTag>
          <SkillTag>Dashboard</SkillTag>
          <SkillTag>Wireframe</SkillTag>
          <SkillTag>User Research</SkillTag>
        </SkillsContainer>
      </AnimatedSection>
    </PortfolioSection>
  )
}

export default Portfolio;

