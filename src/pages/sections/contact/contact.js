import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled, {css} from "styled-components"
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Tizim} from "./static/Tizim";
import RuyxatdanUtish from "./static/RuyxatdanUtish";

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


  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 450,
        position: "relative",
        minHeight: 200,
        borderRadius: 2,
        boxShadow:"1px 1px 10px #ccc"
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
            label="Tizimga kirish"
            {...a11yProps(0)}
            
          />
          <StyledTab
            sx={{ padding: 3, fontWeight: 600 }}
            label="Ruyxatdan uting"
            {...a11yProps(0)}
            
          />
        </StyledTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tizim />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <RuyxatdanUtish />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}


const StyledTabs = styled(Tabs)`

`
const StyledTab = styled(Tab)`

`
