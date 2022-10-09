import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Telbot({ isVisible, goTo }) {
  const btnText = `Continue with ${isVisible.modelName} selected`;

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "#31d6f4",
        marginTop: 4,
        height: "50px"
      }}
    >
      <Toolbar
        onClick={goTo}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <Typography variant="h6" component="div">
          {btnText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
