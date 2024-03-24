import React from "react";
import { StyledMainPage } from "./styles";
import { NavigationPanel } from "./components";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <StyledMainPage>
      <NavigationPanel />
      <Outlet />
    </StyledMainPage>
  );
};

export default MainPage;
