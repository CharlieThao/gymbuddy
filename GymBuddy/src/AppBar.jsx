import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./animations.css";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        backgroundColor: "black",
        height: "90px",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "13px",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 0 }}>
          <Link
            to="/profile"
            style={{ textDecoration: "none", marginRight: "auto" }}
            state={{ isOwnProfile: true }}
          >
            <Button
              sx={{
                padding: "10px 20px",
                border: "none",
                fontSize: "17px",
                color: "#fff",
                borderRadius: "7px",
                letterSpacing: "4px",
                fontWeight: 700,
                textTransform: "uppercase",
                transition: "box-shadow 0.5s, background-color 0.5s",
                backgroundColor: "rgb(0, 0, 0)",
                boxShadow: "0 0 25px rgb(0, 0, 0)",
                textDecoration: "none",
                "&:hover": {
                  boxShadow:
                    "0 0 5px rgb(0, 140, 255), 0 0 0px rgb(0, 140, 255), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255)",
                  background: "rgb(0, 140, 255)",
                },
              }}
            >
              Profile
            </Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <div className="titleDesign2">
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontSize: "30px",
                fontFamily: "Courier",
                flexGrow: 1,
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              GymBuddy
              <span className="hover-text" data-text="GYMBUDDY"></span>
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 0 }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                marginLeft: "auto",
                justifyContent: "right",
                padding: "10px 20px",
                border: "none",
                fontSize: "17px",
                color: "#fff",
                borderRadius: "7px",
                letterSpacing: "4px",
                fontWeight: 700,
                textTransform: "uppercase",
                transition: "box-shadow 0.5s, background-color 0.5s",
                backgroundColor: "rgb(0, 0, 0)",
                boxShadow: "0 0 25px rgb(0, 0, 0)",
                "&:hover": {
                  boxShadow:
                    "0 0 5px rgb(0, 140, 255), 00 00px rgb(0, 255, 26), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255)",
                  background: "rgb(0, 140, 255)",
                },
              }}
            >
              Log in
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
