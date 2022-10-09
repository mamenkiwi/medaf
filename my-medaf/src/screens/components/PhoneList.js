import { Grid } from "@mui/material";
import React, { useDeferredValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { usePhone } from "../../contexts/PhoneContext";
import { useTele } from "../../contexts/TeleContext";
import PhoneItem from "./PhoneItem";
import Telbot from "./Telebot";

export default function PhoneList({ products }) {
  const deferredProducts = useDeferredValue(products);
  const [selectedModel, setModel] = useState(null);
  const { backHandler, backBtn, wuser, app } = useTele();

  //const { app } = useTele();
  const [isVisible, setVisible] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    app.MainButton.hide();
  }, []);
  const onPhoneSelected = (phone) => {
    setVisible(phone);
    const btnText = `Continue with ${phone.modelName} selected`;
    app.MainButton.text = btnText;
    app.MainButton.color = "#31d6f4";
    app.MainButton.show();

    //setSelected(phone.modelName);
    app.MainButton.onClick(() => handleCallback());
    function handleCallback() {
      setModel(phone);
      navigate(`/image/${phone.id}`, {
        state: {
          user: app.initDataUnsafe.user.id,
          uName: app.initDataUnsafe.user.first_name,
          hColor: app.headerColor
        }
      });
      app.BackButton.hide();
      app.offEvent("backButtonClicked", () => {});
    }
  };
  const isAct = isVisible !== null ? isVisible.id : null;

  function handleGotoT() {
    setModel(isVisible);
    navigate(`/image/${isVisible.id}`);
  }
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        direction="row"
        style={{ maxWidth: 1000, marginTop: 4 }}
      >
        {deferredProducts.map((item) => (
          <PhoneItem
            key={item.modelName}
            item={item}
            onClick={onPhoneSelected}
            isVisible={isAct}
          />
        ))}
      </Grid>
      {!wuser && isVisible && (
        <Telbot isVisible={isVisible} goTo={handleGotoT} />
      )}
    </>
  );
}
