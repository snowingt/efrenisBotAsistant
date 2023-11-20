import React, { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import { Typography } from "@mui/material";
import styled from "styled-components";

const CustomH1 = () => {
  const [text, setText] = useState({
    principal: "Guia de Uso de ",
    secondary: "Sadge Pymes",
  });

  // Convierte el texto en un array de letras
  const principalLetters = text.principal.split("");
  const secondaryLetters = text.secondary.split("");

  //styled-component
  const Span = styled.span`
    &:hover {
      color: #008361;
      text-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Agrega un efecto de sombra */
    }
  `;
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "poppins",
        fontSize: "clamp(3rem, 3.5vw, 5rem)",
        fontWeight: 500,

        color: "black",
        textDecoration: "none",
        textAlign: "center",
        width: "fit-content",
        margin: "auto",
        marginTop: "clamp(1rem, 6vw, 5rem)",

        padding: "1rem",
      }}
    >
      {principalLetters.map((letter, index) => (
        <Span key={index}>{letter}</Span>
      ))}

      {secondaryLetters.map((letter, index) => (
        <Span key={index}>{letter}</Span>
      ))}
    </Typography>
  );
};

export default CustomH1;
