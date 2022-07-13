import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "@mui/system";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  // Ref
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  // Handling Scroll
  const handleScroll = (ref) => {
    console.log(ref);
    if (ref === "About") {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else if (ref === "Portfolio") {
      window.scrollTo({
        top: portfolioRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else if (ref === "Contact") {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Header handleScroll={handleScroll} />

      {/* Main */}
      <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
        {/* Banner */}
        <Banner />

        {/* About */}
        <Container maxWidth="xl">
          <Box ref={aboutRef} className="section">
            <About />
          </Box>
        </Container>

        {/* Portfolio */}
        <Box
          ref={portfolioRef}
          className="section"
          sx={{ backgroundColor: "#ebebeb8f", padding: "5rem 0px" }}
        >
          <Portfolio />
        </Box>

        {/* Contact */}
        <Container maxWidth="xl">
          <Box ref={contactRef} className="section">
            <Typography>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
