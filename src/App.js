import { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "@mui/system";

function App() {
  // Ref
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const blogRef = useRef();
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
    } else if (ref === "Blog") {
      window.scrollTo({
        top: blogRef.current.offsetTop,
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
      <Box
        sx={{
          minHeight: "calc(100vh - 170px)",
        }}
      >
        <Banner />

        <Container maxWidth="lg">
          {/* About */}
          <Box ref={aboutRef} className="section">
            <Grid
              container
              spacing={3}
              sx={{
                padding: "0 4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={8}>
                <Typography variant="h1">About</Typography>
                <Typography sx={{ paddingBottom: "1.5rem" }} variant="h4">
                  Hello, I'm XMMEENN.
                </Typography>

                <Typography sx={{ paddingBottom: "1.5rem" }} variant="body1">
                  I'm a software developer based in the Thailand. I'm a
                  self-taught developer with a passion for learning and
                  problem-solving.
                </Typography>

                <Typography sx={{ paddingBottom: "1.5rem" }}>
                  I always thought that every day I went to work.{" "}
                  <span style={{ fontWeight: "bold" }}>
                    "I didn't go to work. But I went to create a works"
                  </span>{" "}
                  that people want to use. and make it the best and will try to
                  develop itself learn new things in order to be used with the
                  works to be better and keep up with the changing era.
                </Typography>

                <Typography sx={{ paddingBottom: "1.5rem" }} variant="body1">
                  I'm currently working as a software engineer at{" "}
                  <a
                    href="https://www.kisracorp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kisracorp
                  </a>{" "}
                  in Thailand
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <img
                  src={require("./asset/images/people1.png")}
                  alt="XMMEENN"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Portfolio */}
          <Box ref={portfolioRef} className="section">
            <h1>Portfolio</h1>
            <Typography>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown
            </Typography>
          </Box>

          {/* Blog */}
          <Box ref={blogRef} className="section">
            <h1>Blog</h1>
            <Typography>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown
            </Typography>
          </Box>

          {/* Contact */}
          <Box ref={contactRef} className="section">
            <h1>Contact</h1>
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
