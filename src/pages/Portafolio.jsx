import {
  Box,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import CarpetaImagenes from "../components/CarpetaImagenes";

const imagePaths = [
  { src: "./RENDERS/COCINA_INTERIOR/ci1.jpg", titulo: "COCINA INTERIOR", carpeta: "COCINA_INTERIOR",},
  { src: "./RENDERS/EDIFICIO/e10.jpg", titulo: "EDIFICIO",carpeta: "EDIFICIO",},
  { src: "./RENDERS/HABI_NIÑA/hn1.jpg", titulo: "HABITACION",carpeta: "HABI_NIÑA",},
  { src: "./RENDERS/HABITACION/h6.jpg", titulo: "HABITACION", carpeta: "HABITACION",},
  {src: "./RENDERS/ING_ECU/ie2.jpg", titulo: "INSPIRACION", carpeta: "ING_ECU",},
  { src: "./RENDERS/MAQUETA1/m11.png", titulo: "MAQUETA", carpeta: "MAQUETA1" },
  { src: "./RENDERS/SALA/s4.jpg", titulo: "SALA", carpeta: "SALA" },
  { src: "./RENDERS/ZONA_TVs/zt5.png", titulo: "LOBBY", carpeta: "ZONA_TVs" },
  { src: "./RENDERS/FACHADA/f2.jpg", titulo: "EXTERIOR", carpeta: "FACHADA" },
];

const Portfolio = () => {
  const [selectedCarpeta, setSelectedCarpeta] = useState(null);
  const [selectedTitulo, setSelectedTitulo] = useState(null);

  const handleImageClick = (carpeta, titulo) => {
    setSelectedCarpeta(carpeta);
    setSelectedTitulo(titulo)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClose = () => {
    setSelectedCarpeta(null);
  };

  if (selectedCarpeta) {
    return <CarpetaImagenes titulo={selectedTitulo} carpeta={selectedCarpeta} onClose={handleClose} />;
  }

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        h="70vh"
        overflow="hidden"
        position="relative"
        p="30px"
      >
        <Image
          src="./RENDERS/ZONA_TVs/zt4.png"
          alt="Fondo"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Flex
          position="absolute"
          top="10%"
          left="0"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          className="slide-in-left"
        >
          <Text
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 8px rgba(0, 0, 0, 0.9)"
            className="changeText"
          >
            PORTAFOLIO
          </Text>
        </Flex>
      </Flex>
      {/*Parte 2 imagenes*/}
      <Box p="80px 20px 20px 20px">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={1}
        >
          {imagePaths.map((image, index) => (
            <GridItem
              key={index}
              position="relative"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleImageClick(image.carpeta, image.titulo)}
            >
              <Image
                src={image.src}
                alt={`Imagen ${index + 1}`}
                w="100%"
                h="100%"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Center
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(8, 173, 249, 0.5)"
                opacity="0"
                transition="opacity 0.2s"
                _hover={{ opacity: 1 }}
              >
                <Text
                  fontSize={["xl", "2xl", "3xl"]}
                  fontWeight="bold"
                  color="white"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
                >
                  {image.titulo}
                </Text>
              </Center>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
