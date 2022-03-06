import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins"
  }
});
