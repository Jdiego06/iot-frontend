import { Grid } from "@mui/material";
import React from "react";
import image_404 from "../assets/404.svg";
import { useTheme } from "@mui/material/styles";

export default function Page404() {
  const theme = useTheme();

  return (
    <Grid
      bgcolor={theme.palette.primary.main}
      height={"100%"}
      container
      alignItems="center"
      justifyContent={"center"}
      direction={"column"}
    >
      <img src={image_404} alt="404" width={"40%"} />
    </Grid>
  );
}
