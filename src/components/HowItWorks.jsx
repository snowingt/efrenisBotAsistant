import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import anaPsyco from "../assets/Absolute_Reality_v16_mujer_joven_psicologa_feliz_con_fondo_bl_1.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
export const HowItWorks = ({ video, texto, titulo }) => {
  return (
    <>
      <Container name="about">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          <Grid item xs={12}>
            <iframe
              width="450"
              height="300"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "poppins",
                fontWeight: 400,

                color: "inherit",

                textAlign: "left",
                fontSiz0: "1.5rem",
              }}
            >
              {titulo}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "roboto",
                fontWeight: 400,

                color: "inherit",
                textDecoration: "none",
                textAlign: "justify",
                fontSize: "1.2rem",
              }}
            >
              {texto}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
