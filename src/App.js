import styled from "styled-components"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import WorkExperience from "./components/WorkExperience"
import Footer from "./components/Footer"
import { ThemeProvider } from "styled-components"

const theme = {
  fonts: {
    title: "'Poppins', sans-serif",
    main: "'Poppins', sans-serif",
  },
  colors: {
    primary: "#FF7E33",
    background: "#FFFFFF",
    text: "#333333",
    darkBg: "#1E1E1E",
    lightGray: "#F5F5F5",
  },
  fontSizes: {
    fontxs: "0.75rem",
    fontsm: "0.875rem",
    fontmd: "1rem",
    fontlg: "1.25rem",
    fontxl: "1.5rem",
    fontxxl: "2rem",
    fontxxxl: "3rem",
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "64em", // 1024px
    xl: "75em", // 1200px
  },
  bodyRgba: "51, 51, 51",
  carouselColor: "#EEEDDE",
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.main};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Hero />
        <Portfolio />
        <WorkExperience />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App

