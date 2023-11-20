import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTopButton = () => {
  const navigate = useNavigate(); // Mover useNavigate dentro de la función del componente

  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <Link
      sx={{
        textDecoration: "none",
      }}
      href="https://api.whatsapp.com/send/?phone=18095849270&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <Button
        sx={{
          bgcolor: "white",
          color: "black",
        }}
        variant="outlined"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <TextsmsIcon color="primary" />
      </Button>
    </Link>
  );
};

export default ScrollToTopButton;
