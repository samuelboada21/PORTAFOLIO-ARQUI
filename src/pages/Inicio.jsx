import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Servicios from "../components/Servicios";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

function Inicio() {
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
        <Box
          as="img"
          src="./publico/FONDO.png"
          alt="Fondo"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          zIndex="1"
        >
          <Text
            fontSize={["5xl", "6xl"]}
            fontWeight="bold"
            className="slide-in-left"
            mb={"50px"}
          >
            <Text className="slide-in-left" as="span" color="black" mr="5px">
              Bienv
            </Text>
            enido
          </Text>
          <Text className="slide-in-right" fontSize="lg">
            Nos complace tu visita
          </Text>
          <Button
            onClick={scrollToServicios}
            position="absolute"
            bottom="20px"
            bg={"gray.800"}
            _hover={"none"}
            _active={"none"}
            color="white"
            borderRadius="full"
            border="2px"
            className="service-image"
            borderColor={"white"}
            p={4}
            zIndex="2"
            ref={serviciosRef}
            boxShadow="lg"
          >
            <FaArrowDown />
          </Button>
        </Flex>
      </Flex>
      <Servicios servicios={serviciosData} />
    </>
  );
}

export default Inicio;
