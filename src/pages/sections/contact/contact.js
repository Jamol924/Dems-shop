import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Tizim } from "./static/Tizim";
import RuyxatdanUtish from "./static/RuyxatdanUtish";
import L from "../../../locale/language.json";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function ContactMenu() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (even, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const lon = useSelector((state) => state.allLanguage);

  return (
    <StyledBox
      className="demo"
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        minHeight: 200,
        borderRadius: 2,
        boxShadow: "1px 1px 10px #ccc",
      }}
    >
      <AppBar
        sx={{ borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
        position="static"
        color="default"
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          className="demo"
        >
          <StyledTab
            sx={{ padding: 3, fontWeight: 600 }}
            label={L.tizim.tz[lon]}
            {...a11yProps(0)}
          />
          <StyledTab
            sx={{ padding: 3, fontWeight: 600 }}
            label={L.tizim.rt[lon]}
            {...a11yProps(0)}
          />
        </StyledTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x" : "x-reverse"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tizim
            onSuccess={() => {
              handleChangeIndex(1);
            }}
          />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <RuyxatdanUtish
            onSuccess={() => {
              handleChangeIndex(0);
            }}
          />
        </TabPanel>
      </SwipeableViews>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  &&.css-1avbm31 {
    position: relative;
    width: 450px;
    @media (max-width: 550px) {
      width: 300px;
    }
  }
`;
const StyledTabs = styled(Tabs)``;
const StyledTab = styled(Tab)`
  &&.MuiButtonBase-root {
    @media (max-width: 550px) {
      padding: 20px 0px;
      font-size: 12px;
    }
  }
`;
