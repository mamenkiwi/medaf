import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import HomeScreen, { loader as brandLoader } from "../screens/HomeScreen";
import RootLayout from "./RootLayout";
import PhoneListScreen, {
  loader as phoneListLoader
} from "../screens/PhoneListScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeScreen />} loader={brandLoader} />
      <Route
        element={<PhoneListScreen />}
        path="/:brand"
        loader={phoneListLoader}
      />
      {/* <Route element={<PhoneListScreen />} path="/:brand" loader={phoneListLoader} />
      <Route element={<ImageWrapper/>} path="/image/:id" loader={sPhoneLoader}>
      <Route index  element={<Uploader /> }  />
      <Route element={<Editor />} path="edit" />
      <Route element={<Mockup />} path="mockup" />

      </Route> */}
    </Route>
  )
);
export default function MainRoute() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}
