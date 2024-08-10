import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Link,
  Button,
} from "@chakra-ui/react";
import Servicios from "../components/Services";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();
  const serviciosData = [
    {
      imagen: "./servicios/FotoRealista.png",
      titulo: t("servicios.renderizado"),
    },
    {
      imagen: "./servicios/TresD.png",
      titulo: t("servicios.animaciones"),
    },
    {
      imagen: "./servicios/Virtuales.png",
      titulo: t("servicios.recorridos"),
    },
    {
      imagen: "./servicios/Interiores.png",
      titulo: t("servicios.visualizacion"),
    },
  ];
  const [w] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickImage = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      {/* Parte 1 Inicio de Nosotros*/}
      <Flex
        direction="column"
        justifyContent="center"
        h="100vh"
        overflow="hidden"
        position="relative"
        p="30px"
      >
        <Image
          src="./RENDERS/ZONA_TVs/zt1.png"
          alt="Fondo"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Box
          w={["100%", "70%", "60%", "50%"]}
          borderRadius="15px 50px"
          bgColor="rgba(255, 255, 255, 0.6)"
          boxShadow="md"
          p={6}
          mt="100px"
          zIndex={1}
          textAlign="left"
        >
          <Text
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            fontWeight="bold"
            className="slide-in-left"
            mb={4}
            color="rgba(0, 0, 0, 0.8)"
          >
            {t('nosotros.portada')}
          </Text>
          <Text
            className="slide-in-right"
            fontSize={["md", "lg"]}
            fontWeight="semibold"
            color="black"
          >
            {t('nosotros.portadaParrafo')}
          </Text>
        </Box>
      </Flex>
      {/* Parte 2 Motores de renderizado*/}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Box
          position="absolute"
          top="10%"
          left="50px"
          height="80%"
          width="4px"
          backgroundColor="#FFF"
        />
        <Box
          w={["200px", "300px", "500px", "700px", "800px"]}
          textAlign={{ base: "left", sm: "center" }}
        >
          <Text
            fontSize={["xl", "2xl", "3xl", "4xl"]}
            fontWeight="bold"
            pt="70px"
            color={"white"}
          >
            {t('nosotros.motorTitulo')}
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            fontWeight="semibold"
            pt="30px"
            color={"white"}
          >
            {t('nosotros.motorParrafo')}
          </Text>
          <Box
            p={4}
            display="flex"
            justifyContent={"center"}
            flexDirection={"column"}
            mt="50px"
            pb="100px"
          >
            <Grid
              templateColumns={w ? "repeat(3,1fr)" : "repeat(2,1fr)"}
              gap={4}
            >
              {w ? (
                <>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-1"
                      src="./motores/D5R.png"
                      alt="Logo"
                      w="130px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-2"
                      src="./motores/ENSCAPE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-3"
                      src="./motores/LUMION.png"
                      alt="Logo"
                      w="60px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-4"
                      src="./motores/TWIMO.png"
                      alt="Logo"
                      w="130px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-5"
                      src="./motores/VRAY.png"
                      alt="Logo"
                      w="110px"
                    />
                  </GridItem>
                </>
              ) : (
                <>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-1"
                      src="./motores/D5R.png"
                      alt="Logo"
                      w="130px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-2"
                      src="./motores/ENSCAPE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-3"
                      src="./motores/LUMION.png"
                      alt="Logo"
                      w={["40px", "65px"]}
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-4"
                      src="./motores/TWIMO.png"
                      alt="Logo"
                      w="130px"
                    />
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      className="image image-animate image-5"
                      src="./motores/VRAY.png"
                      alt="Logo"
                      w="110px"
                    />
                  </GridItem>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Parte 3 Servicios*/}
      <Box bg="#4D4D4D" p="2px 0px 20px 0px">
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
              {t('servicios.boton')}
            </Link>
          </Button>
        </Flex>
      </Box>
      {/* Parte 4 Arquitectos*/}
      <Box
        bg="#1E1D1D"
        p="2px 0px 20px 0px"
        maxW="1000px"
        mx="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        // justifyContent="center"
        // textAlign="center" // Centra el texto dentro de los boxes
      >
        <Box flex="1" boxShadow="md" p={4} m={10} textAlign="center">
          <Image
            src="./publico/PerfilFernando.jpg"
            borderRadius="md"
            mb="40px"
            objectFit="contain"
            width="170px"
            height="170px" // Asegura la misma altura para ambas imágenes
            mx="auto"
            className="service-image"
            onClick={() => handleClickImage("./publico/PerfilFernando.jpg")}
          />
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            <strong style={{ marginRight: "5px" }}>ARQ:</strong> FERNANDO
            GUERRERO
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaLocationDot style={{ marginRight: "8px" }} />
            Cúcuta, Colombia
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaPhone style={{ marginRight: "8px" }} />
            +57 3204663151
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <MdEmail style={{ marginRight: "8px" }} />
            <Link href="mailto:fergue.35@gmail.com">fergue.35@gmail.com</Link>
          </Text>
        </Box>
        <Box flex="1" boxShadow="md" p={4} m={10} textAlign="center">
          <Image
            src="./publico/PerfilJulian.jpeg"
            borderRadius="md"
            mb="40px"
            objectFit="contain"
            width="170px"
            height="170px" // Asegura la misma altura para ambas imágenes
            mx="auto"
            className="service-image"
            onClick={() => handleClickImage("./publico/PerfilJulian.jpeg")}
          />
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            <strong style={{ marginRight: "5px" }}>ARQ:</strong> JULIAN CHAVES
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaLocationDot style={{ marginRight: "8px" }} />
            Cúcuta, Colombia
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaPhone style={{ marginRight: "8px" }} />
            +57 3004911084
          </Text>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <MdEmail style={{ marginRight: "8px" }} />
            <Link href="mailto:julian.chaves.pabon@gmail.com">
              julian.chaves.pabon@gmail.com
            </Link>
          </Text>
        </Box>
        {selectedImage && (
          <Modal isOpen={isOpen} onClose={closeModal} isCentered>
            <ModalOverlay />
            <ModalContent
              maxW={{ base: "100vw", md: "70vh" }}
              maxH="70vh"
              bg="transparent"
            >
              <ModalCloseButton />
              <ModalBody>
                <Image src={selectedImage} w="100%" h="auto" />
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
}
