import { Box } from "@mui/system";
import "./Banner.css";
import ReactTypingEffect from "react-typing-effect";

export default function Banner() {
  return (
    <div className="banner">
      <img src={require("../../asset/images/people4.jpg")} alt="banner" />
      <Box className="typing">
        <ReactTypingEffect
          eraseSpeed={50}
          speed={100}
          text={["Hello, I'm X.MMEENN.", "I'm a Web Developer."]}
        />
      </Box>
    </div>
  );
}
