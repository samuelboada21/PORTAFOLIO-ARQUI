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
} from "@chakra-ui/react";

const carpetaImages = {
  COCINA_INTERIOR: [
    { src: "./RENDERS/COCINA_INTERIOR/ci1.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci2.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci3.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci4.jpg" },
    { src: "./RENDERS/COCINA_INTERIOR/ci5.jpg" },
  ],
  EDIFICIO: [
    { src: "./RENDERS/EDIFICIO/e10.jpg" },
    { src: "./RENDERS/EDIFICIO/e1.jpg" },
    { src: "./RENDERS/EDIFICIO/e11.jpg" },
    { src: "./RENDERS/EDIFICIO/e2.jpg" },
    { src: "./RENDERS/EDIFICIO/e3.jpg" },
    { src: "./RENDERS/EDIFICIO/e4.jpg" },
    { src: "./RENDERS/EDIFICIO/e5.jpg" },
    { src: "./RENDERS/EDIFICIO/e6.jpg" },
    { src: "./RENDERS/EDIFICIO/e7.jpg" },
    { src: "./RENDERS/EDIFICIO/e8.jpg" },
    { src: "./RENDERS/EDIFICIO/e9.jpg" },
  ],
  FACHADA: [
    { src: "./RENDERS/FACHADA/f1.jpg" },
    { src: "./RENDERS/FACHADA/f2.jpg" },
  ],
  HABI_NIÑA: [
    { src: "./RENDERS/HABI_NIÑA/hn3.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn4.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn5.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn1.jpg" },
    { src: "./RENDERS/HABI_NIÑA/hn2.jpg" },
  ],
  HABITACION: [
    { src: "./RENDERS/HABITACION/h1.jpg" },
    { src: "./RENDERS/HABITACION/h2.jpg" },
    { src: "./RENDERS/HABITACION/h3.jpg" },
    { src: "./RENDERS/HABITACION/h4.jpg" },
    { src: "./RENDERS/HABITACION/h5.jpg" },
    { src: "./RENDERS/HABITACION/h6.jpg" },
  ],
  ING_ECU: [
    { src: "./RENDERS/ING_ECU/ie1.jpg" },
    { src: "./RENDERS/ING_ECU/ie2.jpg" },
    { src: "./RENDERS/ING_ECU/ie3.jpg" },
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
    { src: "./RENDERS/ZONA_TVs/zt1.png" },
    { src: "./RENDERS/ZONA_TVs/zt2.png" },
    { src: "./RENDERS/ZONA_TVs/zt3.png" },
    { src: "./RENDERS/ZONA_TVs/zt4.png" },
    { src: "./RENDERS/ZONA_TVs/zt5.png" },
  ],
  // Añadir otras carpetas aquí...
};

const CarpetaImagenes = ({ titulo, carpeta, onClose }) => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  const images = carpetaImages[carpeta] || [];

  const handleClickImage = (image) => {
    setSelectedImage(image);
    onOpen();
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
              onClick={() => handleClickImage(image)}
            />
          </GridItem>
        ))}
      </Grid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent maxW="90vw" maxH="90vh" bg="transparent">
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedImage.src}
                alt={selectedImage.titulo}
                w="100%"
                h="auto"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CarpetaImagenes;
