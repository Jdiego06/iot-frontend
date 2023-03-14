import { Button, Card, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IotDevice from "../assets/IoT-icon.webp";
import KeyIcon from "@mui/icons-material/Key";
import * as moment from "moment";

import "moment/locale/es";
moment.locale("es");

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

function DeviceCard({ name, lastActivivty, token }) {
  return (
    <Card sx={{ p: 2, width: "24%", m: 1 }}>
      <Box display={"flex"}>
        <Box
          sx={{
            mr: 2,
            pr: 2,
            borderRight: 1,
            borderColor: "gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            alt="iot_device"
            src={IotDevice}
            style={{ width: "70px", pointerEvents: "none" }}
          />
        </Box>

        <Box width={"100%"}>
          <Typography fontWeight={"bold"} variant="caption" color="gray">
            Nombre
          </Typography>
          <Typography>{name}</Typography>

          <Typography fontWeight={"bold"} variant="caption" color="gray">
            Última Actividad
          </Typography>
          <Typography>{moment(lastActivivty).fromNow()}</Typography>

          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems="flex-end"
          >
            <Box>
              <Typography fontWeight={"bold"} variant="caption" color="gray">
                Fecha de creación
              </Typography>
              <Typography>2023-02-09</Typography>
            </Box>

            <IconButton color="primary">
              <KeyIcon></KeyIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

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

      <Box display="flex" flexWrap="wrap" width={"100%"} mt={3}>
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
