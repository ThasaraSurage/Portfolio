import styled from "styled-components"
import { ArrowRight } from "./icons/ArrowRight"
import AnimatedSection from "./AnimatedSection"

const WorkSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.fontxxl};
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontxl};
    margin-bottom: 2rem;
  }
`

const ColoredText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ProjectImage = styled.div`
  height: 200px;
  background-color: #ddd;
  position: relative;
`

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.fontlg};
  margin-bottom: 0.5rem;
`

const ProjectDescription = styled.p`
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.7)`};
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  margin-bottom: 1rem;
  flex-grow: 1;
`

const ViewButton = styled.div`
  align-self: flex-end;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    
    svg {
      stroke: white;
    }
  }
`

const WorkExperience = () => {
  return (
    <WorkSection id="project">
      <AnimatedSection>
        <Title>
          My <ColoredText>Projects</ColoredText>
        </Title>
      </AnimatedSection>

      <ProjectsContainer>
        <AnimatedSection threshold={0.1}>
          <ProjectCard>
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>intX</ProjectTitle>
              <ProjectDescription>
                AI driven Interview Preparation tool for all the job seekers
              </ProjectDescription>
              <ViewButton>
                <ArrowRight />
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.2s" }}>
          <ProjectCard>
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>MyTicketHub</ProjectTitle>
              <ProjectDescription>
                A real time ticketing platform
              </ProjectDescription>
              <ViewButton>
                <ArrowRight />
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.4s" }}>
          <ProjectCard>
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>Dashboard UI</ProjectTitle>
              <ProjectDescription>
                Analytics dashboard with data visualization, user management, and customizable widgets.
              </ProjectDescription>
              <ViewButton>
                <ArrowRight />
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        </AnimatedSection>
      </ProjectsContainer>
    </WorkSection>
  )
}

export default WorkExperience;