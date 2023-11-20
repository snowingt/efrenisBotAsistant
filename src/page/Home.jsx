import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import { Herosection } from "../components/Herosection";

import ScorllToTopButton from "../components/atoms/ScrollToTopButton";

import Footer from "../components/Footer";
import CuztomizedTimeline from "../components/CuztomizedTimeline";
import CustomH1 from "../components/atoms/CustomH1";

export const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Herosection />
        <CustomH1 />
        <CuztomizedTimeline />

        <Footer />
        <ScorllToTopButton />
      </Container>
    </>
  );
};
