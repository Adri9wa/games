import { TabOwnProps } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";

const MainNavTabs = {
  home: {
    label: "Home",
    value: "/home",
  },
  guess4: {
    label: "Guess4",
    value: "/guess4",
  },
};

export const mainPageTabs: TabOwnProps[] = [
  {
    label: MainNavTabs.home.label,
    value: MainNavTabs.home.value,
    icon: <HomeRoundedIcon />,
  },
  {
    label: MainNavTabs.guess4.label,
    value: MainNavTabs.guess4.value,
    icon: <ExtensionRoundedIcon />,
  },
];
