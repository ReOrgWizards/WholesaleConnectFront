import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import WCCustomizeAccordion from "./customizeAccordion";

const WCSmallScreenButtonNav = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <WCCustomizeAccordion title={"CATEGORY"} />
        <WCCustomizeAccordion title={"BRAND"} />
        <WCCustomizeAccordion title={"SIZE"} />
      </List>
    </Box>
  );

  return (
    <div className="button-container">
      <React.Fragment key="left">
        <Button id="button1" onClick={toggleDrawer("left", true)}>
          FILTER
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default WCSmallScreenButtonNav;
