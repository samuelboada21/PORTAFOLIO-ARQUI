import Slider from "react-slick";
import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import Servicios from "../components/servicios";
import InicioNosotros from "./InicioNosotros";
import InicioTrabajo from "./InicioTrabajo";

// Carrusel de imágenes
const carouselImages = [
  { src: "./RENDERS/COCINA_INTERIOR/ci1.jpg", text: "BIENVENIDO" },
  { src: "./RENDERS/HABITACION2/hb4.jpg", text: "Visualización" },
  { src: "./RENDERS/ZONA_TVs/zt2.png", text: "Inspiración" },
  { src: "./RENDERS/EDIFICIO/e2.jpg", text: "Transformación" },
  { src: "./RENDERS/BBQ/b2.jpg", text: "Innovación" },
];

const settings = {
  dots: false, // Desactiva los puntos de navegación
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 3000,
  cssEase: "linear",
  arrows: false, // Desactiva las flechas de navegación
  draggable: false, // Desactiva la capacidad de arrastrar las imágenes
  swipe: false, // Desactiva la capacidad de deslizar con el dedo
  touchMove: false, // Desactiva el movimiento táctil
  pauseOnHover: false, // Asegura que el autoplay no se detenga en hover
};

export default function Inicio() {
  const serviciosRef = useRef(null);

  const scrollToServicios = () => {
    const serviciosElement = serviciosRef.current;
    if (serviciosElement) {
      const serviciosRect = serviciosElement.getBoundingClientRect();
      const offset = serviciosRect.top + window.scrollY - 48;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const serviciosData = [
    {
      imagen: "./servicios/FotoRealista.png",
      titulo: "Renderizado Fotorrealista",
    },
    {
      imagen: "./servicios/TresD.png",
      titulo: "Animaciones 3D",
    },
    {
      imagen: "./servicios/Virtuales.png",
      titulo: "Recorridos Virtuales",
    },
    {
      imagen: "./servicios/Interiores.png",
      titulo: "Visualización de Interiores",
    },
  ];

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        overflow="hidden"
        position="relative"
      >
        <Slider {...settings} style={{ width: "100%" }}>
          {carouselImages.map((image, index) => (
            <Box key={index} position="relative" height="100vh" width="100%">
              <Box
                backgroundImage={`url(${image.src})`}
                backgroundSize="cover"
                backgroundPosition="center"
                filter="blur(8px)"
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                left="0"
                zIndex="0"
              />
              <Box
                as="img"
                src={image.src}
                alt={image.text}
                width="100%"
                height="100%"
                objectFit="cover"
                opacity={0.9}
                position="absolute"
                top="0"
                left="0"
                zIndex="1"
              />
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top="55%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="2"
                textAlign="center"
                color="white"
                bg="rgba(0,0,0,0.5)"
                p={5}
                borderRadius="md"
              >
                <Text fontSize={["lg", "3xl", "4xl", "5xl"]} fontWeight="bold">
                  {image.text}
                </Text>
              </Flex>
            </Box>
          ))}
        </Slider>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          zIndex="1"
        >
          <Button
            onClick={scrollToServicios}
            position="absolute"
            bottom="60px"
            bg={"gray.800"}
            _hover={"none"}
            _active={"none"}
            color="white"
            borderRadius="full"
            border="2px"
            className="service-image"
            borderColor={"white"}
            p={4}
            ref={serviciosRef}
            boxShadow="lg"
          >
            <FaArrowDown />
          </Button>
        </Flex>
      </Flex>
      {/* APARTADO DE SERVICIOS */}
      <Flex direction={"column"}>
        <Servicios servicios={serviciosData} />
        <Button
          className="service-image"
          color="black"
          _hover="none"
          _active="none"
          bg="#FFFFFF"
          mx="auto"
          w="100px"
          mb="40px"
        >
          <Link _hover="none" href="/servicios">
            Servicios
          </Link>
        </Button>
      </Flex>
      {/* APARTADO DE NOSOTROS */}
      <InicioNosotros />
      <InicioTrabajo />
    </>
  );
}
