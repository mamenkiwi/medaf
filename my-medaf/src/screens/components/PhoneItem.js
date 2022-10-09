import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { Typography } from "@mui/material";

export default function PhoneItem({ item, onClick, isVisible }) {
  const [loaded, setLoaded] = useState(false);
  const [isAct, setAct] = useState("");
  const handlePhoneClick = (phone) => {
    setAct(phone.modelName);
    onClick(phone);
  };
  let act = isVisible === item.id;
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Box
        onClick={() => handlePhoneClick(item)}
        sx={{
          p: 2,
          boxShadow: 3,
          position: "relative",
          cursor: "pointer",
          border: act ? "3px solid black" : ""
        }}
      >
        {loaded ? null : (
          <Skeleton variant="rectangular" width={100} height={118} />
        )}
        <img
          style={
            loaded
              ? {
                  width: "100%",
                  maxHeight: 150,
                  objectFit: "contain"
                }
              : { display: "none" }
          }
          onLoad={() => setLoaded(true)}
          src={item.pImg}
          alt={item.modelName}
        />
        <Box
          sx={{
            bgcolor: "rgba(21, 21, 21, 0.54)",
            "&:hover": {
              backgroundColor: "#d62a29",
              opacity: [0.9, 0.8, 0.7]
            },
            width: "100%",

            position: "absolute",
            left: 0,
            bottom: 0
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#fff", px: 2, py: 1 }}
          >
            {item.modelName}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
