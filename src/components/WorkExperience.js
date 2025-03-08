import styled from "styled-components"
import { ArrowRight } from "./icons/ArrowRight"
import AnimatedSection from "./AnimatedSection"

const WorkSection = styled.section`
  padding: 4rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 3rem 1rem 2rem;
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
          <ProjectImage 
              style={{ 
                backgroundImage: "url('/intX.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
              }} 
          />
            <ProjectContent>
              <ProjectTitle>intX</ProjectTitle>
              <ProjectDescription>
                AI driven Interview Preparation tool for all the job seekers
                <br/>
                Technologies Used - React,JS,Python
              </ProjectDescription>
              <ViewButton onClick={() => window.open("https://int-x.vercel.app/", "_blank")}>
                <ArrowRight />
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.2s" }}>
          <ProjectCard>
          <ProjectImage 
              style={{ 
                backgroundImage: "url('/oop.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
              }} 
          />
            <ProjectContent>
              <ProjectTitle>MyTicketHub</ProjectTitle>
              <ProjectDescription>
                A real time ticketing platform
                <br/>
                Technologies Used - Angular,Springboot,Java
              </ProjectDescription>
              <ViewButton>
                <ArrowRight />
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} style={{ animationDelay: "0.4s" }}>
          <ProjectCard>
          <ProjectImage 
              style={{ 
                backgroundImage: "url('/ceylonwastenot.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
              }} 
          />
            <ProjectContent>
              <ProjectTitle>CeylonWasteNot</ProjectTitle>
              <ProjectDescription>
                An innovative mobile application which helps waste management in Sri Lanka, that connects
                all farmers, restaurants, and customers.
                <br/>
                Technologies Used - Figma
              </ProjectDescription>
              <ViewButton onClick={() => window.open("https://www.figma.com/proto/4QicsMqyvpJcw3MCEthFZk/Untitled?node-id=0-1&t=LXgHXbe6WGT25BeZ-1", "_blank")}>
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
