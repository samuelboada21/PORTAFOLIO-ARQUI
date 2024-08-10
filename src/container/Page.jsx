import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import TranslationButton from '../components/TranslationButton';

// eslint-disable-next-line react/prop-types
export default function Page({ componente }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavBar />
      <TranslationButton />
      <Box flex="1">{componente}</Box>
      <Footer />
    </Flex>
  );
}
