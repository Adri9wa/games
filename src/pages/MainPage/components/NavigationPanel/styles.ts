import { styled } from "@mui/material";

const StyledNavigationPanel = styled("div")(({ theme: { palette } }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "12px 0",
  borderBottom: `2px solid ${palette.primary.main}`,
}));

export { StyledNavigationPanel };
