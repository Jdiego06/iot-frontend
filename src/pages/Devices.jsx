import {
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeviceCard from "../components/DeviceCard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const devices = [
  {
    id: "7c64f3f8-3604-4f3d-9cfc-3be94c5090c2",
    name: "API Test",
    token: "IOsfX9A3Aj9apoGT",
    lastActivivty: "2023-02-05T18:30:14Z",
  },
  {
    id: "ec89a569-d270-4056-b66b-506598c3e475",
    name: "Raspberry Pi UCO",
    lastActivivty: "2023-03-10T18:30:14Z",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Devices() {
  const theme = useTheme();
  const [showTokenModal, setShowTokenModal] = useState(false);

  return (
    <Box p={2}>
      <Modal open={showTokenModal} onClose={() => setShowTokenModal(false)}>
        <Box sx={style}>
          <Typography variant="h5">Token del dispositivo</Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              borderColor: "primary",
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            <Box py={1} pl={2}>
              sadijfb
            </Box>
            <Box
              bgcolor={theme.palette.primary.main}
              width={"15%"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton color="secondary">
                <ContentCopyIcon></ContentCopyIcon>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Typography variant="h3" fontWeight={400} color={"primary"}>
          Dispositivos
        </Typography>

        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setShowTokenModal(true)}
        >
          Añadir dispositivo
        </Button>
      </Box>

      <Divider sx={{ my: 1 }}></Divider>

      <Box display="flex" flexWrap="wrap" mt={3}>
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            name={device.name}
            token={device.token}
            lastActivivty={device.lastActivivty}
          ></DeviceCard>
        ))}
      </Box>
    </Box>
  );
}
