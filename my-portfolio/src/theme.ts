import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: (props: any ) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        scrollBehavior: "smooth"
      },
    }),
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
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
  altLightBg: "gray.300"
};
