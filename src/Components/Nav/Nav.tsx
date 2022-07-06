import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import React from "react";
import "./Nav.css";

const Nav: React.FC<{}> = () => {
  const data = ["ABOUT", "COOKBOOK", "SHOP", "SUBSCRIBE", "SAVED"];

  //first app bar

  return (
    <>
      <CssBaseline>
        <AppBar className="appbar">
          <Toolbar>
            <Tabs className="tabs">
              <div className="tabbar">
                {data.map((e) => {
                  return <Tab className="tab" label={e}></Tab>;
                })}
              </div>
            </Tabs>
          </Toolbar>
        </AppBar>
        <Typography>
          
          {/* image of header */}

          <img
            src="https://cookieandkate.com/images/2017/04/header-google.jpg"
            alt="img"
            className="image"
          />
        </Typography>
      </CssBaseline>
    </>
  );
};

export default Nav;
