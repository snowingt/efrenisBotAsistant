import { Button, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import React from "react";
import CustomH1 from "./atoms/CustomH1";
import { useNavigate } from "react-router-dom";
import efren from "../assets/efren.jpg";

export const Herosection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4.5rem",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",

                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
                letterSpacing: "0.1rem",
                textTransform: "uppercase",
                marginBottom: "1rem",
                textAlign: "justify",
              }}
            >
              Desarrollamos software a la medida para tu mayor satisfacción.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "roboto",
                fontWeight: "400",

                color: "inherit",
                textDecoration: "none",
                fontSize: "1.5rem",
                lineHeight: "1.2",
                textTransform: "uppercase",
                marginBottom: "1rem",
                textAlign: "justify",
              }}
            >
              Aprende y domina el uso de la aplicación
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
              alt="The house from the offer."
              src={efren}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
