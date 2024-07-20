import {
  Grid,
  GridItem,
  Flex,
  Text,
  IconButton,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import IconButtonReusable from "./IconButtonReusable";

function Footer() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const currentYear = new Date().getFullYear();
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
      position="relative"
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
            <Image
              src="/VER_WHITE.png"
              alt="Logo"
              width="120px"
              height="120px"
            />
          </GridItem>
          <GridItem height="100%" bg="white" />
          <GridItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="lg" mb="24px">
              Email: swag.arquitectos@gmail.com
            </Text>
            <Flex justifyContent="space-around" width="300px" mb="24px">
              {socialLinks.map((link, index) => (
                <IconButtonReusable
                  key={index}
                  icon={link.icon}
                  href={link.href}
                  colorHover={link.colorHover}
                />
              ))}
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
          <Image
            src="/VER_WHITE.png"
            alt="Logo"
            width="120px"
            height="120px"
            mb="24px"
          />
          <Text color="white" fontSize="lg" mb="24px">
            Email: swag.arquitectos@gmail.com
          </Text>
          <Flex justifyContent="center" mb="24px">
            <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "blue" }}
              icon={<FaFacebook />}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100092853669268&mibextid=ZbWKwL",
                  "_blank"
                )
              }
            />
            <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "green.500" }}
              icon={<RiWhatsappFill size="20px" />}
              onClick={() =>
                window.open(`https://wa.me/${whatsappNumber}`, "_blank")
              }
            />
            <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "pink.400" }}
              icon={<FaInstagram size="18px" />}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/swag_arquitectos/",
                  "_blank"
                )
              }
            />
          </Flex>
          <Flex direction={"column"} alignItems="center">
            <Text textAlign="center" color="gray">
              Todos los derechos reservados ©{currentYear} - SWAG
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
