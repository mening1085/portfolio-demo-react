import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box
      className="footer"
      sx={{
        width: "100%",
        backgroundColor: "#212121",
        color: "white",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Copyright © 2022. Created By XMMEENN
    </Box>
  );
}
