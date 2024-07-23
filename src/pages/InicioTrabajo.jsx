import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function CardComponent() {
  const isSmOrLarger = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      width="100%"
      flexDirection={isSmOrLarger ? "row" : "column"}
      justifyContent="center"
      alignItems="center"
      padding="2rem"
      mt={["0px","100px","100px","100px"]}
    >
      {/* Card 1 */}
      <Box
        width={isSmOrLarger ? "45%" : "100%"}
        margin="1rem"
        padding="1rem"
        borderRadius="md"
        boxShadow="lg"
        position="relative"
        bg="white"
      >
        <Image
          src="./RENDERS/FACHADA/f1.jpg"
          alt="Imagen 1"
          position="absolute"
          top="-50px"
          left="50%"
          transform="translateX(-50%)"
          width="200px"
          height="150px"
          objectFit="cover"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.5)"
        />
        <Text mt="100px" fontWeight="bold" fontSize="lg">
          Card 1 Title
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>

      {/* Card 2 */}
      {isSmOrLarger && (
        <Box
          width="45%"
          margin="1rem"
          padding="1rem"
          borderRadius="md"
          boxShadow="lg"
          position="relative"
          bg="white"
        >
          <Image
            src="./RENDERS/FACHADA/f2.jpg"
            alt="Imagen 2"
            position="absolute"
            top="-50px"
            left="50%"
            transform="translateX(-50%)"
            width="200px"
            height="150px"
            objectFit="cover"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.5)"
          />
          <Text mt="100px" fontWeight="bold" fontSize="lg">
            Card 2 Title
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      )}
    </Flex>
  );
}
