import {
  Grid,
  GridItem,
  Flex,
  Text,
  IconButton,
  Image,
  useMediaQuery
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      position="fixed"
      bottom="0"
      width="100%"
      height="400px"
      bg="#1E1D1D"
      shadow="0px -5px 10px rgba(0,0,0,0.5)"
      alignItems={"center"}
      padding="36px"
      direction={w ? "row" : "column"}
      justifyContent="space-around"
    >
      {w ? (
        <Grid templateColumns="1fr 2px 1fr 1fr" gap={6} w={"100%"}>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="/VER_WHITE.png" alt="Logo" width="120px" height="120px" />
          </GridItem>
          <GridItem height="100%" bg="white" />
          <GridItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="lg" mb="24px">
              Email: xxxxxxxx@example.com
            </Text>
            <Flex justifyContent="space-around" width="300px" mb="24px">
              <IconButton
                bg="none"
                _hover={{ color: "blue" }}
                icon={<FaFacebook />}
                onClick={() => window.open("https://www.facebook.com", "_blank")}
              />
              <IconButton
                bg="none"
                _hover={{ color: "green.500" }}
                icon={<RiWhatsappFill size="20px" />}
                onClick={() => window.open("https://www.facebook.com", "_blank")}
              />
              <IconButton
                bg="none"
                _hover={{ color: "pink.400" }}
                icon={<FaInstagram size="18px" />}
                onClick={() => window.open("https://www.facebook.com", "_blank")}
              />
            </Flex>
            <Flex justifyContent="center" direction={"column"}>
              <Text textAlign="center" color="gray">
                Todos los derechos reservados ©{currentYear} - SWAQ
              </Text>
              <Text textAlign="center" color="gray">
                <strong>Web By SamuelDev21</strong>
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      ) : (
        <Flex direction="column" alignItems="center" width="100%">
          <Image src="/VER_WHITE.png" alt="Logo" width="120px" height="120px" mb="24px" />
          <Text color="white" fontSize="lg" mb="24px">
            Email: xxxxxxxx@example.com
          </Text>
          <Flex justifyContent="center" mb="24px">
            <IconButton
              bg="none"
              _hover={{ color: "blue" }}
              icon={<FaFacebook />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <IconButton
              bg="none"
              _hover={{ color: "green.500" }}
              icon={<RiWhatsappFill size="20px" />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <IconButton
              bg="none"
              _hover={{ color: "pink.400" }}
              icon={<FaInstagram size="18px" />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
          </Flex>
          <Flex direction={"column"} alignItems="center">
            <Text textAlign="center" color="gray">
              Todos los derechos reservados ©{currentYear} - SWAQ
            </Text>
            <Text textAlign="center" color="gray">
              <strong>Web By SamuelDev21</strong>
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Footer;
