import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function InicioNosotros() {
  const isMdOrLarger = useBreakpointValue({ base: false, md: true });

  return (
    <Flex height="80vh" position="relative">
      {/* Imagen de fondo difuminada */}
      {isMdOrLarger && (
        <Box
          backgroundImage={"url(./RENDERS/EDIFICIO/e1.jpg)"}
          backgroundSize="cover"
          backgroundPosition="center"
          filter="blur(8px)"
          width="100%"
          height="100%"
          position="absolute"
          zIndex="0"
        />
      )}
      {/* Contenedor principal */}
      <Flex
        width="100%"
        position="relative"
        height="100%"
        flexDirection={isMdOrLarger ? "row" : "column"}
      >
        {/* Contenedor de la imagen nítida */}
        <Box
          width={isMdOrLarger ? "50%" : "100%"}
          height={isMdOrLarger ? "100%" : "auto"}
          display={isMdOrLarger ? "flex" : "none"}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="./RENDERS/EDIFICIO/e1.jpg"
            alt="Imagen de fondo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Contenedor del texto y botón */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={isMdOrLarger ? "rgba(0, 0, 0, 0.5)" : "transparent"}
          color={isMdOrLarger ? "white" : "black"}
          padding="2rem"
          width={isMdOrLarger ? "50%" : "100%"}
          height="100%"
          position={isMdOrLarger ? "relative" : "absolute"}
          top={isMdOrLarger ? "0" : "50%"}
          transform={isMdOrLarger ? "none" : "translateY(-50%)"}
          zIndex="1"
        >
          <Text
            color="white"
            fontSize={["lg", "xl", "2xl", "3xl"]}
            fontWeight="bold"
            mb="2rem"
          >
            En SWAG Arquitectos
          </Text>
          <Text
            color="white"
            fontSize={["sm", "md", "lg", "lg"]}
            fontWeight="bold"
            mb="1rem"
          >
            Nos centramos en:
          </Text>
          <Text
            maxW="300px"
            textAlign="center"
            color="white"
            fontSize={["sm", "md", "lg", "lg"]}
            fontWeight="bold"
            mb="2rem"
          >
            Innovación, Detalle, Experiencia, Calidad, Inspiración,
            Transformación.
          </Text>
          <Link to="/nosotros">
            <Button className="service-image" color="black" _hover="none" _active="none" bg="#FFFFFF" size="md">
              Conoce más
            </Button>
          </Link>
        </Flex>
      </Flex>
      {/* Imagen nítida en fondo para pantallas pequeñas */}
      {!isMdOrLarger && (
        <Image
          src="./RENDERS/EDIFICIO/e1.jpg"
          alt="Imagen de fondo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "0",
          }}
        />
      )}
    </Flex>
  );
}
