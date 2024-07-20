import AppRouter from "./routes/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import theme from "./utils/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
