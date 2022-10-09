import React from "react";
//import { BrandProvider } from "../contexts/BrandContext";
import { FileContextProvider } from "../contexts/FileContext";
//import { PhoneProvider } from "../contexts/PhoneContext";
//import MainRoute from "./MainRoute";
import MainRoute from "./MainRoute";
//import MainRouteTwo from "./MainRouteTwo";

export default function ProvidersComp() {
  return (
    <div>
      <FileContextProvider>
        <MainRoute />
      </FileContextProvider>
    </div>
  );
}
