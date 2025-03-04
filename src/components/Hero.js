import styled from "styled-components"

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 80px); // Subtract navbar height
  padding: 0;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding-top: 2rem;
  height: 100%;
`

const HiTag = styled.div`
  background-color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: ${(props) => props.theme.fontSizes.fontsm};
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid #eee;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFB74D'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
    background-size: contain;
    top: -15px;
    right: -10px;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  margin-bottom: 1rem;
  max-width: 800px;
`

const ColoredText = styled.span`
  color: #C48ADB;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1rem;
`

const SemiCircle = styled.div`
  width: 500px;
  height: 250px;
  background-color: #FFB74D;
  border-radius: 250px 250px 0 0;
  position: absolute;
  bottom: 0;
  z-index: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 300px;
    height: 150px;
    border-radius: 150px 150px 0 0;
  }
`

const ProfileImage = styled.div`
  width: 300px;
  height: 375px;
  background-image: url("/Thasara_Surage.png");
  background-size: cover;
  background-position: center top;
  position: relative;
  z-index: 2;
  margin-bottom: -5px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 200px;
    height: 250px;
  }
`

const Decoration = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFB74D'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'/%3E%3C/svg%3E");
  background-size: contain;
  opacity: 0.5;
  
  &.top-left {
    top: 10%;
    left: 15%;
    transform: rotate(-15deg);
  }
  
  &.bottom-right {
    bottom: 30%;
    right: 15%;
    transform: rotate(15deg);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Decoration className="top-left" />
      <Decoration className="bottom-right" />
      <HeroContent>
        <HiTag>Hello!</HiTag>
        <Title>
          I'm <ColoredText>Thasara</ColoredText>,<br />
          Computer Science Undergraduate
        </Title>
        <ImageContainer>
          <SemiCircle />
          <ProfileImage />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero

