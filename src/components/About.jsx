import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export const About = ({ content }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
        my: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "clamp(2rem, 2vw, 2rem)",
          fontWeight: 500,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          textAlign: "center",
          width: "100%",
        }}
      >
        Guía de apoyo
      </Typography>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {content.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                my: 2,
              }}
            >
              <Avatar sx={{ width: 50, height: 50, bgcolor: "secondary.main" }}>
                {item.icon}
              </Avatar>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "popins",
                  fontWeight: 600,
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "justify",
                  fontSize: "1.4rem",
                  ml: 2,
                }}
              >
                {item.titulo}
              </Typography>
              <Grid item xs={12} key={item.id}>
                <iframe
                  width="300"
                  height="250"
                  src={item.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
