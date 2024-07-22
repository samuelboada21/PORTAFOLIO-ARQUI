import { Box, Button, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Servicios from "../components/Servicios";

function Inicio() {
  const [w] = useMediaQuery("(min-width: 700px)");
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const images = [
    { src: "./RENDERS/EDIFICIO/e2.jpg", text: "Visualización" },
    { src: "./RENDERS/EDIFICIO/e3.jpg", text: "Inspiración" },
    { src: "./RENDERS/EDIFICIO/e4.jpg", text: "Transformación" },
    { src: "./RENDERS/EDIFICIO/e5.jpg", text: "Innovación" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentImage((prevImage) => {
        if (prevImage >= images.length) {
          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentImage(0);
          }, 1000);
          return prevImage;
        }
        return prevImage + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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
          className="carousel"
          display="flex"
          flexDirection="row"
          transition={transitionEnabled ? "transform 1s ease-in-out" : "none"}
          transform={`translateX(-${currentImage * 100}%)`}
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex="0"
        >
          {images.map((image, index) => (
            <Box key={index} flex="none" width="100%" height="100%">
              <Box
                as="img"
                src={image.src}
                alt={image.text}
                width="100%"
                height="100%"
                objectFit={!w && "contain"}
                opacity={0.9}
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
                <Text fontSize="2xl">{image.text}</Text>
              </Flex>
            </Box>
          ))}
          {/* Duplicating the first image to achieve smooth transition */}
          <Box flex="none" width="100%" height="100%">
            <Box
              as="img"
              src={images[0].src}
              alt={images[0].text}
              width="100%"
              height="100%"
              objectFit={!w && "contain"}
              opacity={0.9}
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
              <Text fontSize="2xl">{images[0].text}</Text>
            </Flex>
          </Box>
        </Box>
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
            mb={"120px"}
          >
            <Text className="slide-in-left" as="span" color="black" mr="5px">
              Bienv
            </Text>
            enido
          </Text>
          <Text fontWeight="semibold" className="slide-in-right" fontSize="lg">
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
      <Flex direction={"column"}>
        <Servicios servicios={serviciosData} />
        <Button className="service-image" mx="auto" w="100px" mb="40px">
          <Link _hover="none" href="/servicios">
            Servicios
          </Link>
        </Button>
      </Flex>
    </>
  );
}

export default Inicio;
