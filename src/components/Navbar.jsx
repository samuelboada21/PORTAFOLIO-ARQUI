import {
  Flex,
  Image,
  Link,
  Box,
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
import IconButtonReusable from "./IconButtonReusable";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const whatsappNumber = "573204663151";

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=100092853669268&mibextid=ZbWKwL",
      colorHover: "blue",
    },
    {
      icon: <RiWhatsappFill size="20px" />,
      href: `https://wa.me/${whatsappNumber}`,
      colorHover: "green.500",
    },
    {
      icon: <FaInstagram size="18px" />,
      href: "https://www.instagram.com/swag_arquitectos/",
      colorHover: "pink.400",
    },
  ];

  return (
    <Flex
      position="fixed"
      width="100%"
      backdropFilter="blur(2px)"
      bg="rgba(30,29,29,0.9)"
      padding="36px"
      shadow="0px 0px 10px rgba(0,0,0,1)"
      justifyContent="space-between"
      alignItems="center"
      maxH={w ? "110px" : "130px"}
      zIndex="11"
    >
      <Flex direction="column">
        <Link href="/">
          <Image src="/HOR_WHITE.png" alt="Logo" w="120px" />
        </Link>
        {!w && (
          <Box mt={2}>
            {socialLinks.map((link, index) => (
              <IconButtonReusable
                key={index}
                icon={link.icon}
                href={link.href}
                colorHover={link.colorHover}
              />
            ))}
          </Box>
        )}
      </Flex>

      {w ? (
        <Box textAlign="center" alignContent={"center"}>
          <Link
            href="/"
            m="0px 10px"
            textDecoration={location.pathname === "/" ? "underline" : "none"}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            m="0px 10px"
            color="white"
            textDecoration={
              location.pathname === "/servicios" ? "underline" : "none"
            }
          >
            Servicios
          </Link>
          <Link
            href="/portafolio"
            m="0px 10px"
            color="white"
            textDecoration={
              location.pathname === "/portafolio" ? "underline" : "none"
            }
          >
            Portafolio
          </Link>
          <Link
            href="/nosotros"
            m="0px 10px"
            textDecoration={location.pathname === "/nosotros" ? "underline" : "none"}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            m="0px 10px"
            color="white"
            textDecoration={
              location.pathname === "/contacto" ? "underline" : "none"
            }
          >
            Contacto
          </Link>
        </Box>
      ) : (
        <Button bg="transparent" onClick={onOpen} _hover="none" _active="none">
          <Icon as={FaBars} fontSize="20px" color="white"></Icon>
        </Button>
      )}

      {w && (
        <Box>
          {socialLinks.map((link, index) => (
            <IconButtonReusable
              key={index}
              icon={link.icon}
              href={link.href}
              colorHover={link.colorHover}
            />
          ))}
        </Box>
      )}

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#1E1D1D" pt="70px">
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <Flex direction="column" textAlign="center">
                <Link
                  href="/"
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
