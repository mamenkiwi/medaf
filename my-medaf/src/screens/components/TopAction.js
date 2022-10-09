import React from "react";
import { Crop as CropIcon, Save, Close, Done } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

export default function TopAction() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "transparent",
        paddingRight: 16,
        paddingLeft: 16,
        color: "white",
        marginTop: 10,
        maxWidth: 500
      }}
    >
      <IconButton>
        <Close sx={{ color: "white" }} fontSize="large" />
      </IconButton>
      <IconButton>
        <Done sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </div>
  );
}
