import {
  Flex,
  Image,
  Link,
  Box,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaBars } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

function Navbar() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      position="fixed"
      width="100%"
      bg="#1E1D1D"
      padding="36px"
      shadow="0px 0px 10px rgba(0,0,0,1)"
      justifyContent="space-between"
      alignItems="center"
      zIndex="11"
    >
      <Flex direction="column">
        <Image src="/HOR_WHITE.png" alt="Logo" w="120px" />
        {!w && (
          <Box mt={2}>
            <IconButton
              bg={"none"}
              _hover={{ color: "blue" }}
              icon={<FaFacebook />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <IconButton
              bg={"none"}
              _hover={{ color: "green.500" }}
              icon={<RiWhatsappFill size="20px" />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <IconButton
              bg={"none"}
              _hover={{ color: "pink.400" }}
              icon={<FaInstagram size="18px" />}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
          </Box>
        )}
      </Flex>

      {w ? (
        <Box textAlign="center" alignContent={"center"}>
          <Link href="/inicio" m="0px 10px" color="white">
            Inicio
          </Link>
          <Link href="/servicios" m="0px 10px" color="white">
            Servicios
          </Link>
          <Link href="/portafolio" m="0px 10px" color="white">
            Portafolio
          </Link>
          <Link href="/contacto" m="0px 10px" color="white">
            Contacto
          </Link>
        </Box>
      ) : (
        <>
          <Button bg="transparent" onClick={onOpen}>
            <Icon as={FaBars} fontSize="20px" color="white"></Icon>
          </Button>
        </>
      )}

      {w && (
        <Box>
          <IconButton
            bg={"none"}
            _hover={{ color: "blue" }}
            icon={<FaFacebook />}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <IconButton
            bg={"none"}
            _hover={{ color: "green.500" }}
            icon={<RiWhatsappFill size="20px" />}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <IconButton
            bg={"none"}
            _hover={{ color: "pink.400" }}
            icon={<FaInstagram size="18px" />}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
        </Box>
      )}

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#1E1D1D" pt="70px">
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <Flex direction="column" textAlign="center">
                <Link
                  href="/inicio"
                  mb="10px"
                  p="3px"
                  display="block"
                  color="white"
                  _hover={{
                    borderRadius: "md",
                    bg: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Inicio
                </Link>
                <Link
                  href="/servicios"
                  mb="10px"
                  p="3px"
                  display="block"
                  color="white"
                  _hover={{
                    borderRadius: "md",
                    bg: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Servicios
                </Link>
                <Link
                  href="/portafolio"
                  mb="10px"
                  p="3px"
                  display="block"
                  color="white"
                  _hover={{
                    borderRadius: "md",
                    bg: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Portafolio
                </Link>
                <Link
                  href="/contacto"
                  mb="10px"
                  p="3px"
                  display="block"
                  color="white"
                  _hover={{
                    borderRadius: "md",
                    bg: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Contacto
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
