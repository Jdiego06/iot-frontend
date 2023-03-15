import IotDevice from "../assets/unnamed.png";
import { Box, Card, IconButton, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.locale("es");

export default function DeviceCard({
  name,
  lastActivivty,
  token,
  onShowToken,
}) {
  return (
    <Card sx={{ p: 2, minWidth: "30%", m: 1 }}>
      <Box display={"flex"}>
        <Box
          sx={{
            mr: 2,
            pr: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            alt="iot_device"
            src={IotDevice}
            style={{ width: "100px", pointerEvents: "none" }}
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
          <Typography>{dayjs(lastActivivty).fromNow()}</Typography>

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

            <IconButton color="primary" sx={{ mb: -1 }} onClick={onShowToken}>
              <KeyIcon></KeyIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
