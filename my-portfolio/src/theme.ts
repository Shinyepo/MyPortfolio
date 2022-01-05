import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  components: {
    Input: {
      baseStyle: {
        textTransform: "uppercase",
        borderColor: "red",
        fontSize: "80px",
      },
      defaultProps: {
        textTransform: "uppercase",
      },
    },
  },
});
