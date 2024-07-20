import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1E1D1D"
      },
    },
  },
});

export default theme;
