import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TeleContext = createContext();

export function useTele() {
  return useContext(TeleContext);
}

export function TeleProvider({ children }) {
  const [app, setApp] = useState();
  const [loading, setLoading] = useState(true);
  const [wuser, setUser] = useState();
  const [backH, setBH] = useState({
    visible: false,
    loc: "",
    callback: null
  });
  const [theme, setTheme] = useState({
    bg_color: "",
    text_color: "",
    secondary_bg_color: "",
    button_text_color: ""
  });

  //const location = useLocation();
  useEffect(() => {
    setApp(window.Telegram.WebApp);
  }, []);

  useEffect(() => {
    if (!app) return;
    app.ready && app.ready();
    setUser(app.initDataUnsafe.user);

    setTheme({
      bg_color: app.themeParams.bg_color,
      secondary_bg_color: app.themeParams.secondary_bg_color,

      button_text_color: app.themeParams.button_text_color,
      text_color: app.themeParams.text_color
    });
    setLoading(false);
  }, [app]);

  const backBtn = (visible, cb) => {
    let BackBtn = app.BackButton;
    let BtnSrH = visible ? BackBtn.show() : BackBtn.hide();

    return BtnSrH;
  };
  const backBtnCallb = (loc, cb) => {
    console.log("loc");
    return app.BackButton.show().onClick(() => {
      cb();
      app.BackButton.offClick(() => {
        console.log("off clicked");
      });
    });
  };
  const backHandler = (visible, callMe) => {
    let BackBtn = app.BackButton;
    if (visible) {
      BackBtn.show();
    } else {
      BackBtn.hide();
    }
    BackBtn.onClick(() => {
      callMe("location");
    });

    return BackBtn;
  };
  const value = {
    app,
    backHandler,
    backBtnCallb,
    backBtn,
    wuser,
    theme
  };

  return (
    <TeleContext.Provider value={value}>
      {!loading && children}
    </TeleContext.Provider>
  );
}
