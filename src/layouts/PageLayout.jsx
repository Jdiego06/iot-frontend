import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";

export const PageLayout = () => (
  <Grid container height={"100%"}>
    <SideBarMenu></SideBarMenu>
    <Outlet></Outlet>
  </Grid>
);
