import { Box, Flex, Image, Text } from "@chakra-ui/react";

function ServicioPage() {
  const services = [
    {
      color: "#1e1d1d",
      img: "./servicios/FotoRealista.png",
      text: "Foto Realista",
    },
    {
      color: "#1e1d1d",
      img: "./servicios/Interiores.png",
      text: "Interiores",
    },
    {
      color: "blackAlpha.500",
      img: "./servicios/TresD.png",
      text: "3D",
    },
    {
      color: "blackAlpha.500",
      img: "./servicios/Virtuales.png",
      text: "Virtuales",
    },
  ];

  const textos = [
    {
      titulo: "Renderizado Fotorrealista:",
      parrafo:
        "Transformamos tus ideas en imágenes impactantes y detalladas, capturando cada matiz y textura para ofrecer una visión precisa y realista de tus proyectos.",
    },
    {
      titulo: "Visualización de Interiores:",
      parrafo:
        "Creamos representaciones detalladas y estilizadas de espacios interiores, ayudando a visualizar la disposición, iluminación y atmósfera para una planificación precisa y efectiva.",
    },
    {
      titulo: "Animaciones 3D:",
      parrafo:
        "Llevamos tus diseños a la vida con animaciones fluidas que muestran cada ángulo y detalle, permitiéndote explorar y presentar tus proyectos de manera dinámica y envolvente.",
    },
    {
      titulo: "Recorridos Virtuales:",
      parrafo:
        "Ofrecemos experiencias inmersivas mediante tours virtuales, permitiendo a los clientes caminar virtualmente por sus espacios futuros y experimentar el diseño antes de la construcción.",
    },
  ];

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
            SERVICIOS
          </Text>
        </Flex>
      </Flex>

      <Box
        position="relative"
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box flex="1">
          {services.map((service, index) => (
            <Flex
              key={index}
              bg={service.color}
              p="20px"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Image
                src={service.img}
                alt={service.text}
                boxSize="80px"
                objectFit="cover"
                ml="20px"
                mr="20px"
                mb="10px"
              />
              <Box maxW="700px">
                <Text
                  fontSize="xl"
                  textAlign={{ base: "center", sm: "left" }}
                  fontWeight="bold"
                  color="white"
                >
                  {textos[index].titulo}
                </Text>
                <Text
                  fontSize="md"
                  textAlign={{ base: "center", sm: "left" }}
                  color="white"
                >
                  {textos[index].parrafo}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box
          flexBasis={{ base: "0%", md: "0%", lg: "40%", xl: "20%" }}
          display={{ base: "none", md: "none", lg: "block" }}
          position="relative"
        >
          <Image
            src="./RENDERS/ZONA_TVs/zt5.png"
            alt="Sobrepuesto"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
    </>
  );
}

export default ServicioPage;
