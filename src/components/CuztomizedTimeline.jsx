import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { HowItWorks } from "./HowItWorks";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { About } from "./About";
import { useEffect, useState } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SellIcon from "@mui/icons-material/Sell";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SavingsIcon from "@mui/icons-material/Savings";

const content = [
  {
    video: "https://www.youtube.com/embed/feBRTvaAaqY?si=DkLYi6TJlFelf86C",
    titulo: "Configurar Datos Compañía",
    texto:
      "Configura la información básica de tu compañía, como nombre, dirección y detalles de contacto.",
    icon: <ApartmentIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/F2BZvuHfpQ4?si=4R5ow4PJBs3FE1Mf",
    titulo: "Crear Proveedores",
    texto:
      "Aprende a agregar y gestionar proveedores para tus productos o servicios.",
    icon: <LocalShippingIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/UshzWlxMOzQ?si=F_N3NONOEen9Wli-",
    titulo: "Crear Clientes",
    texto:
      "Tutorial sobre cómo registrar y administrar la información de tus clientes.",
    icon: <ContactPageIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/kPzUAI1WWJ8?si=B63hmPRK46AAsKtK",
    titulo: "Crear Productos",
    texto:
      "Explora cómo añadir nuevos productos a tu inventario con detalles como nombre, precio y categoría.",
    icon: <FastfoodIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/bQzumT2msyw?si=WSGqDU1ifgulAHPV",
    titulo: "Crear Vendedores",
    texto:
      "Gestiona la información de los vendedores y sus asociaciones con tu compañía.",
    icon: <SellIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/PxH52MsLKlY?si=ss2xO2daaBR43-AQ",
    titulo: "Modulo de Facturación",
    texto:
      "Aprende a utilizar el módulo de facturación para crear y gestionar facturas de manera eficiente.",
    icon: <PriceCheckIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/v8_HIlxSpvY?si=N0czpDAesUljEZPV",
    titulo: "Cuentas por Cobrar",
    texto:
      "Explora cómo gestionar cuentas por cobrar y realizar un seguimiento de los pagos pendientes.",
    icon: <CurrencyExchangeIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/jX-sPmBUS8M?si=WCqFKLNdEd4AN_wR",
    titulo: "Cuentas por Pagar y Balance Inicial",
    texto:
      "Tutorial sobre cómo manejar cuentas por pagar y establecer el balance inicial de tu compañía.",
    icon: <ShoppingCartCheckoutIcon />,
    time: "",
  },
  {
    video: "https://www.youtube.com/embed/Sy-qB_9c3k0?si=HUdRWrTdVSKAcgeC",
    titulo: "Modulo de Ingresos",
    texto:
      "Descubre cómo utilizar el módulo de ingresos para registrar y categorizar tus fuentes de ingresos.",
    icon: <SavingsIcon />,
    time: "",
  },
];

export default function CustomizedTimeline() {
  // ver si la pantalla es menor a 600px
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    handleResize(); // Llamamos a la función una vez para establecer el estado inicial

    window.addEventListener("resize", handleResize);

    return () => {
      // Limpiar el listener en el desmontaje del componente
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El efecto se ejecutará solo en el montaje y desmontaje del componente

  return isMobile ? (
    <About content={content} />
  ) : (
    <Timeline
      position="alternate"
      sx={{
        marginTop: "clamp(1rem, 6vw, 5rem)",
      }}
    >
      {content.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" sx={{ bgcolor: "secondary.main" }}>
              {item.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <HowItWorks
              video={item.video}
              titulo={item.titulo}
              texto={item.texto}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
