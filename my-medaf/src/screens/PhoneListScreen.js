import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useEffect, useState } from "react";
import { useTele } from "../contexts/TeleContext";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { phoneCreate, postPhoneD } from "../api/getBrand";
import { phoneListRequest } from "../api/phoneListRequest";
import PhoneList from "./components/PhoneList";
async function postPList(brandName) {
  const payload = phoneListRequest(brandName);

  return payload;
  // for (const item of payload) {
  //   const res = await phoneCreate(item);
  //   console.log(res);
  // }
  // const sp = JSON.stringify(payload)
  // const res = await postPhoneD(sp);
  // console.log(res);
}

export default function PhoneListScreen() {
  const { brand } = useParams();
  const { app, backHandler, backBtn, wuser, backBtnCallb } = useTele();
  const phoneList = useLoaderData();
  const [filterTerm, setFilterTerm] = useState("");
  function filterPhones(filterTerm) {
    let lwrFilterTerm = filterTerm.toLowerCase();
    if (!lwrFilterTerm) {
      return phoneList;
    }
    return phoneList.filter((phone) =>
      phone.modelName.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }
  const filteredPhonesList = filterPhones(filterTerm);

  function updateFilterHandler(event) {
    setFilterTerm(event.target.value);
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <AppBar sx={{ bgcolor: "#31d6f4" }}>
        <Toolbar sx={{ display: "block", pb: 1 }}>
          <Typography variant="h6" component="div">
            {brand} Phones
          </Typography>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "90%"
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Phone model"
              onChange={updateFilterHandler}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 10 }}>
        <PhoneList products={filteredPhonesList} />
      </Box>
    </Box>
  );
}
export function loader({ params }) {
  const brandName = params.brand;

  return postPList(brandName);
}
