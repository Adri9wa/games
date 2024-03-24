import { Tabs, styled } from "@mui/material";

const TabsWithStyles = styled(Tabs)(({ theme: { spacing, palette } }) => ({
  "& .MuiTab-root": {
    textTransform: "none",
  },
}));

export { TabsWithStyles };
