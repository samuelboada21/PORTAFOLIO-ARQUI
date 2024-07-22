import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useMediaQuery,
  Link,
  Button,
} from "@chakra-ui/react";
import Servicios from "../components/Servicios";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

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

export default function Nosotros() {
  const [w] = useMediaQuery("(min-width: 800px)");
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
          src="./RENDERS/ZONA TVs/zt1.png"
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
            SWAG - Arquitectos
          </Text>
          <Text
            className="slide-in-right"
            fontSize={["md", "lg"]}
            fontWeight="semibold"
            color="black"
          >
            En Swag Arquitectos, nos enfocamos en la visualización
            arquitectónica para crear espacios que inspiren y transformen.
            Utilizamos tecnología avanzada en renders 3D, animaciones y realidad
            virtual para materializar las visiones de nuestros clientes con
            detalle y precisión.
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
          >
            MOTOR DE RENDERIZADO
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            fontWeight="semibold"
            pt="30px"
          >
            Swag Arquitectos utiliza motores de renderizado avanzados para
            transformar modelos 3D en imágenes fotorrealistas, garantizando
            precisión y calidad en cada proyecto.
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
          <Button className="service-image" mx="auto" w="100px" mb="40px">
            <Link _hover="none" href="/servicios">
              Servicios
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
        <Box flex="1" boxShadow="md" p={4} m={10}>
          <Image
            src="./publico/Logo.png"
            borderRadius="md"
            mb="40px"
            objectFit="contain"
            // height="100px"
            width="170px"
            mx="auto"
            className="service-image"
          />
          <Text display={"flex"} alignItems={"center"}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            <strong>ARQ:</strong> FERNANDO GUERRERO
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <FaLocationDot style={{ marginRight: "8px" }} />
            Cúcuta, Colombia
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <FaPhone style={{ marginRight: "8px" }} />
            +57 3204663151
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <MdEmail style={{ marginRight: "8px" }} />
            <Link href="mailto:fergue.35@gmail.com">fergue.35@gmail.com</Link>
          </Text>
        </Box>
        <Box flex="1" boxShadow="md" p={4} m={10}>
          <Image
            src="./publico/Logo.png"
            borderRadius="md"
            mb="40px"
            objectFit="contain"
            // height="100px"
            width="170px"
            mx="auto"
            className="service-image"
          />
          <Text display={"flex"} alignItems={"center"}>
            <FaUserCircle style={{ marginRight: "8px" }} />
            <strong>ARQ:</strong> JULIAN CHAVES
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <FaLocationDot style={{ marginRight: "8px" }} />
            Cúcuta, Colombia
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <FaPhone style={{ marginRight: "8px" }} />
            +57 3004911084
          </Text>
          <Text display={"flex"} alignItems={"center"}>
            <MdEmail style={{ marginRight: "8px" }} />
            <Link href="mailto:julian.chaves.pabon@gmail.com">
              julian.chaves.pabon@gmail.com
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
