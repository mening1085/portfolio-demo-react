import { Box, Grid, Typography } from "@mui/material";
import ReactTypingEffect from "react-typing-effect";
export default function About() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={12} md={8}>
        <Box
          sx={{
            textDecorationColor: "#212121",
            marginBottom: "1.5rem",
            fontWeight: "600",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
            }}
          >
            About Me
          </Typography>
        </Box>

        <Typography sx={{ paddingBottom: "1.5rem" }} variant="h4">
          <ReactTypingEffect
            eraseSpeed={10}
            speed={100}
            text={["Hello, I'm XMMEENN."]}
          />
        </Typography>

        <Typography sx={{ paddingBottom: "1.5rem" }} variant="body1">
          I'm a software developer based in the Thailand. I'm a self-taught
          developer with a passion for learning and problem-solving.
        </Typography>

        <Typography sx={{ paddingBottom: "1.5rem" }}>
          I always thought that every day I went to work.{" "}
          <span style={{ fontWeight: "bold" }}>
            "I didn't go to work. But I went to create a works"
          </span>{" "}
          that people want to use. and make it the best and will try to develop
          itself learn new things in order to be used with the works to be
          better and keep up with the changing era.
        </Typography>

        <Typography sx={{ paddingBottom: "1.5rem" }} variant="body1">
          I'm currently working as a software engineer at{" "}
          <a href="https://www.kisracorp.com/" target="_blank" rel="noreferrer">
            Kisracorp
          </a>{" "}
          in Thailand
        </Typography>

        <Box
          className="skill-list"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/html.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/css.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/js.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/php.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/vue.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/nuxt.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/laravel.png")}
            alt="XMMEENN"
          />
          <img
            style={{ objectFit: "contain", width: "100px" }}
            src={require("../../asset/images/skill/node.png")}
            alt="XMMEENN"
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <img
          src={require("../../asset/images/people1.png")}
          alt="XMMEENN"
          width={"100%"}
          sx={{ height: "auto", objectFit: "contain" }}
        />
      </Grid>
    </Grid>
  );
}
