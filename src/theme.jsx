import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/expletus-sans";
import "@fontsource/pt-sans";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: `'Expletus Sans Variable', sans-serif`,
    body: `'PT Sans', sans-serif`,
    poppins: `'Poppins', sans-serif`,
  },
});

export default theme;
