import Slider from "react-slick";
import {
  Flex,
  Box,
  Image,
  useBreakpointValue,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "./RENDERS/EDIFICIO/e1.jpg", link: "/portafolio" },
  { src: "./RENDERS/EDIFICIO/e4.jpg", link: "/portafolio" },
  { src: "./RENDERS/EDIFICIO/e5.jpg", link: "/portafolio" },
  { src: "./RENDERS/EDIFICIO/e8.jpg", link: "/portafolio" },
  { src: "./RENDERS/EDIFICIO/e10.jpg", link: "/portafolio" },
];

export default function CardComponent() {
  const isSmOrLarger = useBreakpointValue({ base: false, md: true });

  const bgGradient = useBreakpointValue({
    base: "linear-gradient(180deg, #1E1D1D 0%, #1E1D1D 30%, #fff 25%, #fff 65%, #1E1D1D 65%, #1E1D1D 100%)",
    sm: "linear-gradient(180deg, #1E1D1D 0%, #1E1D1D 25%, #fff 25%, #fff 75%, #1E1D1D 75%, #1E1D1D 100%)",
  });

  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: isSmOrLarger ? 2 : 1,
    // slidesToScroll: 2,
    // swipeToSlide: true,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    slidesToShow: isSmOrLarger ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Flex
      direction="column"
      width="100%"
      justifyContent="center"
      padding="2rem"
      mt={{ base: "0px", sm: "60px" }}
      mb={{ base: "30px", md: "100px" }}
      background={bgGradient}
    >
      <Heading as="h1" size={["xl", "2xl"]} mb="4" color="white">
        PROYECTOS
      </Heading>
      <Slider {...settings} style={{ width: "100%" }}>
        {images.map((image, index) => (
          <Link key={index} href={image.link}>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="0"
              paddingBottom="60%"
            >
              <Image
                src={image.src}
                alt={`Imagen ${index + 1}`}
                position="absolute"
                top="0"
                left="50%"
                transform="translateX(-50%)"
                width="70%"
                height="100%"
                // objectFit="cover"
                borderRadius="20px"
                boxShadow="0px 0px 20px rgba(0, 0, 0, 0.5)"
              />
            </Box>
          </Link>
        ))}
      </Slider>
      <Button
        mt="4"
        display="flex"
        className="service-image"
        mx="auto"
        maxW="100px"
        color="black"
        _hover="none"
        _active="none"
        bg="#FFFFFF"
        onClick={() => (window.location.href = "/portafolio")}
      >
        Más
      </Button>
    </Flex>
  );
}
