import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: "dark",
    disableTransitionOnChange: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.200", "gray.900")(props),
      },
    }),
  },
});

export const colorMode = {
  darkBorder: "rgba(255,255,255,.2)",
  lightBorder: "rgba(0,0,0,.2)",
  darkIcon: "gray.300",
  lightIcon: "gray.700",
  darkBg: "gray.800",
  lightBg: "gray.200",
  altDarkBg: "gray.700",
  altLightBg: "gray.300",
};
