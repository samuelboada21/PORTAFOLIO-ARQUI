/* eslint-disable react/prop-types */
import { Flex, Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Servicios = ({ servicios }) => {
  return (
    <Flex m="30px 0px 30px 0px" direction="column" align="center" p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        Nuestros Servicios
      </Text>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {servicios.map((servicio, index) => (
          <ServicioCard key={index} servicio={servicio} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const ServicioCard = ({ servicio }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) {
        setTimeout(() => setIsVisible(true), 500);
      }
    },
  });

  return (
    <Box
      ref={ref}
      className={isVisible ? 'animate' : 'hidden'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      <Image
        src={servicio.imagen}
        alt={servicio.titulo}
        borderRadius="md"
        mb={3}
        objectFit="contain"
        height="100px"
        width="100px"
        mx="auto"
        className="service-image"
      />
      <Text mb={2}>{servicio.titulo}</Text>
      <Text>{servicio.descripcion}</Text>
    </Box>
  );
};

export default Servicios;
