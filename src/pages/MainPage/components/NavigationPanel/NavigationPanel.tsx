import { StyledTabs } from "components";
import { mainPageTabs } from "pages/MainPage/constants";
import React from "react";
import { StyledNavigationPanel } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationPanel = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleNavigate = (newTab: any) => {
    navigate(newTab.toLowerCase());
  };
  return (
    <StyledNavigationPanel>
      <StyledTabs
        value={pathname}
        onChange={handleNavigate}
        tabs={mainPageTabs}
      />
    </StyledNavigationPanel>
  );
};

export default NavigationPanel;
