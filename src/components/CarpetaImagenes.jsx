/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const carpetaImages = {
  COCINA_INTERIOR: [
    { src: "./RENDERS/COCINA_INTERIOR/ci1.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci5.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci2.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci4.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci3.jpg" },
  ],
  EDIFICIO: [
    { src: "./RENDERS/EDIFICIO/e10.jpg" },
    { src: "./RENDERS/EDIFICIO/e11.jpg" },
    { src: "./RENDERS/EDIFICIO/e1.jpg" },
    { src: "./RENDERS/EDIFICIO/e7.jpg" },
    { src: "./RENDERS/EDIFICIO/e8.jpg" },
    { src: "./RENDERS/EDIFICIO/e9.jpg" },
    { src: "./RENDERS/EDIFICIO/e3.jpg" },
    { src: "./RENDERS/EDIFICIO/e2.jpg" },
    { src: "./RENDERS/EDIFICIO/e4.jpg" },
    { src: "./RENDERS/EDIFICIO/e5.jpg" },
    { src: "./RENDERS/EDIFICIO/e6.jpg" },
  ],
  FACHADA: [
    { src: "./RENDERS/FACHADA/f2.jpg" },
    { src: "./RENDERS/FACHADA/f1.jpg" },
  ],
  HABI_NIÑA: [
    { src: "./RENDERS/HABI_NIÑA/hn4.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn3.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn5.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn1.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn2.jpg" },
  ],
  HABITACION: [
    { src: "./RENDERS/HABITACION/h6.jpg" },
    { src: "./RENDERS/HABITACION/h4.jpg" },
    { src: "./RENDERS/HABITACION/h3.jpg" },
    { src: "./RENDERS/HABITACION/h2.jpg" },
    { src: "./RENDERS/HABITACION/h5.jpg" },
    { src: "./RENDERS/HABITACION/h1.jpg" },
  ],
  ING_ECU: [
    { src: "./RENDERS/ING_ECU/ie3.jpg" },
    { src: "./RENDERS/ING_ECU/ie1.jpg" },
    { src: "./RENDERS/ING_ECU/ie2.jpg" },
  ],
  MAQUETA1: [
    { src: "./RENDERS/MAQUETA1/m11.png" },
    { src: "./RENDERS/MAQUETA1/m12.png" },
    { src: "./RENDERS/MAQUETA1/m13.png" },
    { src: "./RENDERS/MAQUETA2/m21.png" },
    { src: "./RENDERS/MAQUETA2/m22.png" },
    { src: "./RENDERS/MAQUETA2/m23.png" },
    { src: "./RENDERS/MAQUETA2/m24.png" },
  ],
  SALA: [
    { src: "./RENDERS/SALA/s4.jpg" },
    { src: "./RENDERS/SALA/s2.jpg" },
    { src: "./RENDERS/SALA/s3.jpg" },
    { src: "./RENDERS/SALA/s1.jpg" },
  ],
  ZONA_TVs: [
    { src: "./RENDERS/ZONA_TVs/zt2.png" },
    { src: "./RENDERS/ZONA_TVs/zt1.png" },
    { src: "./RENDERS/ZONA_TVs/zt3.png" },
    { src: "./RENDERS/ZONA_TVs/zt5.png" },
    { src: "./RENDERS/ZONA_TVs/zt4.png" },
  ],
  BBQ: [
    { src: "./RENDERS/BBQ/b1.jpg" },
    { src: "./RENDERS/BBQ/b2.jpg" },
    { src: "./RENDERS/BBQ/b3.jpg" },
    { src: "./RENDERS/BBQ/b4.jpg" },
  ],
  // Añadir otras carpetas aquí...
};

const CarpetaImagenes = ({ titulo, carpeta, onClose }) => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = carpetaImages[carpeta] || [];
  const selectedImage = images[currentIndex];

  const handleClickImage = (index) => {
    setCurrentIndex(index);
    onOpen();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box p="20px" mt="150px">
      <Box mb="20px">
        <Text fontSize="2xl" fontWeight="bold">
          {titulo.replace("_", " ").toUpperCase()}
        </Text>
        <Text as="button" onClick={onClose} color="blue.300">
          Volver al portafolio
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={2}
      >
        {images.map((image, index) => (
          <GridItem key={index} position="relative" overflow="hidden">
            <Image
              src={image.src}
              w="100%"
              h="auto"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              onClick={() => handleClickImage(index)}
            />
          </GridItem>
        ))}
      </Grid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent
            maxW={{ base: "100vw", md: "75vw" }}
            maxH="90vh"
            bg="transparent"
          >
            <ModalCloseButton />
            <ModalBody position="relative" p={0}>
              <Box
                position="fixed"
                left={{base: "0%", sm: "0.5%"}}
                top="50%"
                bg="white"
                w={{ base: "6vh", md: "8vh" }}
                h={{ base: "6vh", md: "8vh" }}
                transform="translateY(-50%)"
                zIndex="1"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  icon={
                    <GrFormPrevious
                      style={{ color: "black", fontSize: "4vh" }}
                    />
                  }
                  onClick={handlePrev}
                  aria-label="Previous image"
                  size="lg"
                  isRound
                  variant="ghost"
                />
              </Box>
              <Image src={selectedImage.src} w="100%" h="auto" />
              <Box
                position="fixed"
                top="50%"
                right={{base: "0%", sm: "2%"}}
                bg="white"
                w={{ base: "6vh", md: "8vh" }}
                h={{ base: "6vh", md: "8vh" }}
                transform="translateY(-50%)"
                zIndex="1"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  icon={
                    <GrFormNext style={{ color: "black", fontSize: "4vh" }} />
                  }
                  onClick={handleNext}
                  aria-label="Next image"
                  size="lg"
                  isRound
                  variant="ghost"
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CarpetaImagenes;
