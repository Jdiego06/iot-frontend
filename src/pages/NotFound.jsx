import React from "react";
import image_404 from "../assets/404.svg";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function NotFound() {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      height="100%"
      display={"flex"}
      justifyContent="center"
    >
      <img src={image_404} alt="404" width={"40%"} />
    </Box>
  );
}
