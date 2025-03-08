import styled, { css, keyframes } from "styled-components"
import useScrollAnimation from "../hooks/useScrollAnimation"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled.div`
  opacity: 0;
  
  ${({ isVisible }) =>
    isVisible &&
    css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}
`

const AnimatedSection = ({ children, threshold = 0.1, ...props }) => {
  const { ref, isVisible } = useScrollAnimation(threshold)

  return (
    <Container ref={ref} isVisible={isVisible} {...props}>
      {children}
    </Container>
  )
}

export default AnimatedSection;