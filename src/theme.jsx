import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/expletus-sans";
import "@fontsource/pt-sans";

const theme = extendTheme({
  fonts: {
    heading: `'Expletus Sans Variable', sans-serif`,
    body: `'PT Sans', sans-serif`,
  },
});

export default theme;
