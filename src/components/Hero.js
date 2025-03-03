import styled from "styled-components"

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
`

const HiTag = styled.div`
  background-color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD700'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
    background-size: contain;
    top: -10px;
    right: -10px;
  }
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.fontxxxl};
  font-weight: bold;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.fontxxl};
  }
`

const ColoredText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`

const CircleBackground = styled.div`
  width: 400px;
  height: 400px;
  background-color: #FFB74D;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
  }
`

const ProfileImage = styled.div`
  width: 300px;
  height: 400px;
  background-image: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RKjFo5VPSOhozDgMZ4YLDLUab0Gmbi.png");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 200px;
    height: 300px;
  }
`

const Decoration = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF7E33'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'/%3E%3C/svg%3E");
  background-size: contain;
  
  &.top-left {
    top: 20%;
    left: 20%;
  }
  
  &.bottom-right {
    bottom: 20%;
    right: 20%;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Decoration className="top-left" />
      <Decoration className="bottom-right" />
      <CircleBackground />
      <HeroContent>
        <HiTag>HELLO</HiTag>
        <Title>
          I'm <ColoredText>Thasara</ColoredText>,<br />
          Computer Science
          <br />
          Undergraduate
        </Title>
        <ProfileImage />
      </HeroContent>
    </HeroSection>
  )
}

export default Hero;

