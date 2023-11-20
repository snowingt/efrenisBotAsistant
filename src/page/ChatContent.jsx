import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Chat } from "@mui/icons-material";
import ChatApp from "./ChatApp";
import SignInSide from "../components/SingInSide";
import { useUserContext } from "../context/UserContext";
import { MagicMotion } from "react-magic-motion";
import efren from "../assets/efren.jpg";

// TODO remove, this demo shouldn't need to reset the theme.

export default function ChatContent() {
  const { user } = useUserContext;

  const estiloEnLinea = {
    background: "rgba(255, 255, 255, 0.22)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3.7px)",
    WebkitBackdropFilter: "blur(3.7px)",
    border: "1px solid rgba(255, 255, 255, 0.53)",
  };

  return (
    <>
      {user == false ? (
        <SignInSide></SignInSide>
      ) : (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${efren})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <ChatApp />
          </Grid>
        </Grid>
      )}
    </>
  );
}
