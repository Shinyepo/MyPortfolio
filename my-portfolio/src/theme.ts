import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
