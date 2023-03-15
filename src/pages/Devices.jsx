import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeviceCard from "../components/DeviceCard";

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

export default function Devices() {
  return (
    <Box p={2}>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Typography variant="h3" fontWeight={400} color={"primary"}>
          Dispositivos
        </Typography>

        <Button variant="outlined" startIcon={<AddIcon />}>
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
