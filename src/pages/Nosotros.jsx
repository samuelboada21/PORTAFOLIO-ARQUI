import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Servicios from "../components/Servicios";

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
          src="./nosotros/Nosotros1.png"
          alt="Fondo"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex={0}
        />
        <Box
          w={["100%", "70%", "60%", "50%"]}
          borderRadius="lg"
          bgColor="rgba(255, 255, 255, 0.4)"
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
        // bgGradient="linear(to-b, #1E1D1D 50%, #535353 50%)"
      >
        <Box
          position="absolute"
          top="10%"
          left="50px"
          height="80%"
          width="4px"
          backgroundColor="#FFF"
        />
        <Box w={["200px", "300px", "500px", "700px", "800px"]}>
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
          >
            <Grid
              templateColumns={w ? "repeat(4,1fr)" : "repeat(2,1fr)"}
              gap={4}
            >
              {w ? (
                <>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-1"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-2"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-3"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-4"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                </>
              ) : (
                <>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-1"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-2"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-3"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}></GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    <Image
                      className="image image-animate image-4"
                      src="./publico/HOR_WHITE.png"
                      alt="Logo"
                      w="120px"
                    />
                  </GridItem>
                </>
              )}
            </Grid>
            <Text
              fontSize={["xl", "2xl", "3xl", "3xl"]}
              fontWeight="bold"
              pt="70px"
            >
              Herramientas
            </Text>
            <Text fontSize={{ base: "sm", sm: "lg" }} pt="10px" pl="20px">
              D5 RENDER
            </Text>
            <Text fontSize={{ base: "sm", sm: "lg" }} pt="10px" pl="20px">
              LUMINION
            </Text>
            <Text fontSize={{ base: "sm", sm: "lg" }} pt="10px" pl="20px">
              TWINMOTION
            </Text>
            <Text fontSize={{ base: "sm", sm: "lg" }} pt="10px" pl="20px" mb="30px">
              V-RAY
            </Text>
          </Box>
        </Box>
      </Box>
      <Box bg="#4D4D4D" p="2px 0px 20px 0px">
        <Servicios servicios={serviciosData} />
      </Box>
    </>
  );
}
