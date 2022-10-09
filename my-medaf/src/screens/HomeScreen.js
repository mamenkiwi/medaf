import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getBrand } from "../api/getBrand";

export default function HomeScreen() {
  //console.log(brandData);
  const brandLoader = useLoaderData();
  let navigate = useNavigate();
  const goTobrand = (brandName) => {
    //localStorage.setItem("brand", brandName);

    navigate(`/${brandName}`);
  };

  return (
    <Box
      display="flex"
      minHeight="80vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="block">
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
          All Phone Brands
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid
            container
            sx={{ px: 1 }}
            spacing={{ xs: 2, md: 3 }}
            direction="row"
            style={{ maxWidth: 800, marginTop: 4 }}
          >
            {brandLoader.map((item) => (
              <Grid item xs={3} key={item.brandName}>
                <Box
                  onClick={() => goTobrand(item.brandName)}
                  sx={{
                    p: 2,
                    boxShadow: 3,
                    position: "relative",
                    cursor: "pointer"
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      maxHeight: 150,
                      objectFit: "contain"
                    }}
                    src={item.bImg}
                    alt={item.brandName}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export function loader() {
  return getBrand();
}
