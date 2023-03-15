import { Box } from "@mui/system";

import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import { TopBar } from "../components/TopBar";

export const PageLayout = () => {
  return (
    <Box style={{ height: "100%" }}>
      <TopBar></TopBar>

      <Box display={"flex"} height={`calc(100% - 64px)`}>
        <SideBarMenu></SideBarMenu>
        <Box overflow={"auto"} width="100%">
          <Outlet></Outlet>
        </Box>
      </Box>
    </Box>
  );
};
